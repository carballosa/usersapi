const http = require('http');

const api = require('./api');

const { port } = require('./api/config');

const server = http.createServer(api);

server.on('error', handleError);
server.listen(port);

console.log('Server listening on port', port);

function handleError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }
  switch (error.code) {
    case 'EACCES':
      console.error(`Port ${port} requires elevated privileges`);
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(`Port ${port} is already in use`);
      process.exit(1);
      break;
    default:
      throw error;
  }
}