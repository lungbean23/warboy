#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const http = require('http');
const { spawn } = require('child_process');

// replace the current PORT line with:
const PORT = parseInt(process.env.HUD_PORT || '5599', 10);
const REPO_DIR = process.env.REPO_DIR || process.cwd();
const LOG_DIR = process.env.LOG_DIR || path.join(REPO_DIR, 'workflow-tools/dev-all/logs');
const INDEX_HTML = path.join(__dirname, 'web_hud.html');

function safeStat(p){ try { return fs.statSync(p); } catch { return null; } }

function discover() {
  const picks = new Map();
  const st = safeStat(LOG_DIR);
  if (!st || !st.isDirectory()) return [];

  for (const name of fs.readdirSync(LOG_DIR)) {
    if (name.endsWith('.latest.log')) {
      const label = name.replace(/\.latest\.log$/, '');
      picks.set(label, path.join(LOG_DIR, name));
    }
  }

  const ts = fs.readdirSync(LOG_DIR).filter(n => n.endsWith('.log') && !n.endsWith('.latest.log'));
  const groups = new Map();
  for (const f of ts) {
    const m = /^([^\.]+)\./.exec(f);
    if (!m) continue;
    const label = m[1];
    if (!groups.has(label)) groups.set(label, []);
    groups.get(label).push(f);
  }
  for (const [label, files] of groups) {
    if (!picks.has(label)) {
      const sorted = files
        .map(fn => {
          const full = path.join(LOG_DIR, fn);
          const st2 = safeStat(full);
          return st2?.isFile() ? { full, m: st2.mtimeMs } : null;
        })
        .filter(Boolean)
        .sort((a,b) => b.m - a.m);
      if (sorted[0]) picks.set(label, sorted[0].full);
    }
  }

  return [...picks.entries()]
    .sort((a,b)=>a[0].localeCompare(b[0]))
    .map(([label, file]) => ({label, file}));
}

function sendText(res, code, text, headers={}) {
  res.writeHead(code, {'content-type':'text/plain; charset=utf-8', ...headers});
  res.end(text);
}

function serveIndex(res){
  fs.readFile(INDEX_HTML, 'utf8', (err, html) => {
    if (err) return sendText(res, 500, `Failed to read ${INDEX_HTML}\n${err.message||err}`);
    res.writeHead(200, {'content-type':'text/html; charset=utf-8'});
    res.end(html);
  });
}

function routeLabels(res) {
  res.writeHead(200, {'content-type':'application/json; charset=utf-8'});
  res.end(JSON.stringify(discover()));
}

function resolveLabel(label) {
  const entry = discover().find(x => x.label === label);
  return entry?.file;
}

function routeFile(req, res, label) {
  const file = resolveLabel(label);
  if (!file) return sendText(res, 404, `Unknown label: ${label}`);
  const s = fs.createReadStream(file, {encoding:'utf8'});
  res.writeHead(200, {'content-type':'text/plain; charset=utf-8'});
  s.pipe(res);
}

function routeTail(req, res, label, nStr) {
  const file = resolveLabel(label);
  if (!file) return sendText(res, 404, `Unknown label: ${label}`);
  const n = /^\d+$/.test(nStr) ? nStr : '500';
  const ps = require('child_process').spawn('tail', ['-n', n, file]);
  res.writeHead(200, {'content-type':'text/plain; charset=utf-8', 'cache-control':'no-cache'});
  ps.stdout.pipe(res);
  ps.stderr.on('data', b => res.write(`\n[tail err] ${b}`));
  ps.on('close', () => res.end());
}

function isLoopback(req) {
  const ip = req.socket.remoteAddress || '';
  return ip === '127.0.0.1' || ip === '::1' || ip === '::ffff:127.0.0.1';
}

function routeShutdown(req, res) {
  if (!isLoopback(req)) return sendText(res, 403, 'Forbidden');
  sendText(res, 200, 'Shutting down…');
  setTimeout(() => process.exit(0), 50);
}

const server = http.createServer((req, res) => {
  const u = new URL(req.url, `http://${req.headers.host}`);
  if (req.method === 'GET'  && (u.pathname === '/' || u.pathname === '/index.html')) return serveIndex(res);
  if (req.method === 'GET'  && u.pathname === '/labels') return routeLabels(res);
  if (req.method === 'GET'  && u.pathname.startsWith('/file/')) return routeFile(req, res, decodeURIComponent(u.pathname.slice(6)));
  if (req.method === 'GET'  && u.pathname.startsWith('/tail/')) {
    const parts = u.pathname.split('/'); // /tail/<label>/<n?>
    return routeTail(req, res, decodeURIComponent(parts[2] || ''), decodeURIComponent(parts[3] || '500'));
  }
  if (req.method === 'POST' && u.pathname === '/shutdown') return routeShutdown(req, res);
  sendText(res, 404, 'Not found');
});

server.listen(PORT, '127.0.0.1', () => {
  console.log(`[web-hud] http://localhost:${PORT}  logs=${LOG_DIR}`);
});

