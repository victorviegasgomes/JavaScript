const http = require("http")
http.createServer((requisicao, resposta)=> {
  resposta.writeHead(200, {"Context-type":"text/plain"})
  resposta.write("servidor rodando com sucesso")
  resposta.end()
}).listen(8080)