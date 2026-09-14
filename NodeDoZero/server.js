const { createServer } = require('node:http');

const server = createServer((request, response) => {
  response.end('Olá!');
});

server.listen(3334, () => {
  console.log('Servidor rodando em http://localhost:3334');
});