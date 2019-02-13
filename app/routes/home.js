module.exports = function(app){
	//respondendo arquivo caso for chamado a página
	app.get('/', function(req, res){
		res.render('home/index');
	});

	app.post('/agenda', function(req,res){
		var connection = app.config.dbConnection();
		var agendaModel =  new app.app.models.AgendaDAO(connection);
		//executando a função que o db connection está retornando

		agendaModel.getAgenda(function(error, result){
	 		//passando tudo pra view
	 		res.render("agenda/agenda", {agenda : result});
	 	});

	})

	app.post('/contato', function(req,res){
		res.render('admin/form_add_agendamento', {validacao:{}, agendamento : {}});
	})
}