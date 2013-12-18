var http = require('http');
var fs = require('fs');

var server = http.createServer(function(request,response){
	fs.readFile(__dirname+'/index.html',function(err,html){
		response.writeHead(200,{'Content-Type':'text/html; charset=utf-8'});
		response.write(html);
		response.end();
	});
});

server.listen(3000,function(){
	console.log('Executando Servidor HTTP');
});