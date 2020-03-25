var http = require('http');
var fs = require('fs');
const port = process.env.PORT || 3000

var server = http.createServer(function (request, response) {
  fs.readFile("./index.html", function (err, data) {
    response.end(data);
  });
});

server.listen(3000, function () {
  console.log('Servidor rodando na porta 3000');
});