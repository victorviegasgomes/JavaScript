const http = require("http")
const url = require("url")
const porta = 8080
const host = "127.0.0.1"

const servidor = http.createServer((req, res)=> {
  res.writeHead(200, {"Content-Type":"text-html"})
  res.write(res.url)
  const parametro = url.parse(res.url, true).query
  res.write("<br>"+parametro.nome)
  res.write("<br>"+parametro.sobrenome)
  res.end()
})
servidor.listen(porta, host, () => {
  console.log("servidor no ar")
})