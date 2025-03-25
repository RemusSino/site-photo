const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;
const STATIC_DIR = path.join(__dirname, 'out');

const MIME_TYPES = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'application/javascript',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.webp': 'image/webp',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.otf': 'font/otf',
  '.eot': 'application/vnd.ms-fontobject'
};

const server = http.createServer((req, res) => {
  console.log(`Request: ${req.method} ${req.url}`);
  
  // Handle home page request
  let filePath = path.join(STATIC_DIR, req.url === '/' ? 'index.html' : req.url);
  
  // Handle directory URLs (add index.html)
  if (filePath.endsWith('/')) {
    filePath = path.join(filePath, 'index.html');
  }
  
  // Check if path exists
  fs.stat(filePath, (err, stats) => {
    if (err) {
      // If file/directory doesn't exist, try adding .html
      if (!path.extname(filePath)) {
        const htmlFilePath = `${filePath}.html`;
        fs.access(htmlFilePath, fs.constants.F_OK, (htmlErr) => {
          if (!htmlErr) {
            // HTML file exists, serve it
            serveFile(htmlFilePath, res);
          } else {
            // Check if it's a directory
            fs.stat(filePath, (dirErr, dirStats) => {
              if (!dirErr && dirStats.isDirectory()) {
                // Redirect to same URL with trailing slash
                res.writeHead(301, { 'Location': `${req.url}/` });
                res.end();
              } else {
                handle404(res);
              }
            });
          }
        });
      } else {
        handle404(res);
      }
    } else if (stats.isDirectory()) {
      // Redirect to same URL with trailing slash if not already there
      if (!req.url.endsWith('/')) {
        res.writeHead(301, { 'Location': `${req.url}/` });
        res.end();
      } else {
        // Serve index.html from directory
        serveFile(path.join(filePath, 'index.html'), res);
      }
    } else {
      // It's a file, serve it
      serveFile(filePath, res);
    }
  });
});

// Function to serve a file
function serveFile(filePath, res) {
  const extname = path.extname(filePath).toLowerCase();
  const contentType = MIME_TYPES[extname] || 'application/octet-stream';
  
  fs.readFile(filePath, (err, content) => {
    if (err) {
      console.error(`Error reading file: ${err.code}`);
      if (err.code === 'ENOENT') {
        handle404(res);
      } else {
        res.writeHead(500);
        res.end(`Server Error: ${err.code}`);
      }
    } else {
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content, 'utf-8');
    }
  });
}

// Function to handle 404 errors
function handle404(res) {
  fs.readFile(path.join(STATIC_DIR, '404.html'), (err404, content404) => {
    if (err404) {
      res.writeHead(404);
      res.end('404 Not Found');
    } else {
      res.writeHead(404, { 'Content-Type': 'text/html' });
      res.end(content404, 'utf-8');
    }
  });
}

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
  console.log(`Serving static files from: ${STATIC_DIR}`);
}); 