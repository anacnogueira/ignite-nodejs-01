import http from "node:http";

const server = http.createServer((request, response) => {
  return response.end("Olá JS");
});

server.listen(3333);
