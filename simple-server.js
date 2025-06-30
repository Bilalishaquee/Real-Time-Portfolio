import http from 'http';

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World\n');
});

const port = 3005;
server.listen(port, '0.0.0.0', () => {
  console.log(`Simple HTTP server running at http://0.0.0.0:${port}/`);
});