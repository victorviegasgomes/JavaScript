var http = require('http')
var servidor = http.createServer(function(reqest, response) {
	response.writeHead(200, {"Content-Type": "text/html"})
	response.write("<h1>olá, mundo</h1>")
	response.end()
})
servidor.listen(3001, function() {
	console.log("servidor rodando")
})
