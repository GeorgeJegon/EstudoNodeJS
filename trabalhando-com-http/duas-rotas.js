var http = require('http');

var server = http.createServer(function(request,response){
	response.writeHead(200,{'Content-Type':'text/html; charset=utf-8'});

	var html = '<html><body>';

	if(request.url=="/"){
		html += '<h1>Olá Node.js!</h1>';
		html += '<a href="/bemvindo">Bem vindo</a>';
	}else if(request.url=="/bemvindo"){
		html += '<h1>Bem-vindo ao Node.js!</h1>';
		html += '<a href="/">Olá Node.js</a>';
	}else{
		html += '<h1>Página não encontrada!</h1>';
		html += '<a href="/">Voltar para a Home</a>';
	}//END IF

	html += '</body></html>';

	response.write(html);

	response.end();
});

server.listen(3000,function(){
	console.log('Executando Servidor HTTP');
});