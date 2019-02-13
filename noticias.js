var http = require('http');

var server = http.createServer(function(req, res){

	var categoria = req.url;

	if(categoria == "")
		res.end("<html><body>Portal de notícias</body></html>");
	else
		switch(categoria){
			case "/tecnologia": res.end("<html><body>Tecnologia</body></html>");
			break;
			case "/moda": res.end("<html><body>Moda</body></html>");
			break;
			case "/games": res.end("<html><body>Games</body></html>");
			break;
			case "/teste": res.end("<html><body>Teste</body></html>");
			break;
			case "/alo": res.end("<html><body>Alo</body></html>");
			break;
		}
	
	
});

server.listen(3000);