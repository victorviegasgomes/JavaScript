var http = require('http')
var server = http.createServer(function(request, response) {
	response.writeHead(200, {"Content-Type": "text-html"})
	if(request.url == "/") {
		response.write("<h1>pagina principal</h1>")
	}else if(request.url == "/bemvindo") {
		response.write("<h1>hem vindo</h1>")
	}else {
		response.write("<h1>pagina nao encontrada :( </h1>")
	}
	response.end()
})
server.listen(3002, function() {
	console.log("servidor rodando")
})
