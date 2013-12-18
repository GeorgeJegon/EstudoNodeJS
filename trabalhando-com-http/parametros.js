var http = require('http');
var url = require('url');

var server = http.createServer(function(request,response){
	//Faz um parse da string url digitada.
	var result = url.parse(request.url,true);

	response.writeHead(200,{'Content-Type':'text/html; charset=utf-8'});

	var html = '<html><body><h1>Dados da query string</h1>';

	//Itera o resultado de parâmetros passados via query string.
	for(var key in result.query){
		html+= '<h2>'+key+': '+result.query[key]+'</h2>';
	}//END FOR
	html+='</body></html>';
	response.write(html);
	response.end();
});

server.listen(3000,function(){
	console.log('Executando Servidor HTTP');
});