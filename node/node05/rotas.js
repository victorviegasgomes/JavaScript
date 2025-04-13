const http = require("http")
const port = 8080
const host = "127.0.0.1"

const servidor = http.createServer((requisicao, resposta)=> {
  resposta.writeHead(200, {"Content-Type": "text/html"})
  if(requisicao.url === "/") {
    resposta.write("<h1>seja bem vindo</h1>")
  }else if(requisicao.url === "/canal") {
    resposta.write("<h1>aprendendo node com CFB cursos</h1>")
  }if(requisicao.url === "/curso") {
    resposta.write("<h1>curso de node js</h1>")
  }
  resposta.end()
})
servidor.listen(port, host, () => {
  console.log("servidor rodando")
})