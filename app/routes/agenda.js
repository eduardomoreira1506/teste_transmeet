module.exports = function(app){
	app.get('/agenda', function(req, res){
		var connection = app.config.dbConnection();
		var agendaModel =  new app.app.models.AgendaDAO(connection);
		//executando a função que o db connection está retornando

		agendaModel.getAgenda(function(error, result){
	 		//passando tudo pra view
	 		res.render("agenda/agenda", {agenda : result});
	 	});
	 });

	app.post('/agenda/delete', function(req,res){
		var agendaParaRemover = req.body.delete;

		if(agendaParaRemover == ""){
			console.log("Digite alguma coisa");
			return;
		}
		
		var connection = app.config.dbConnection();
		var agendaModel =  new app.app.models.AgendaDAO(connection);
		

		//retorna erros em json
		var erros = req.validationErrors();
		console.log(erros);
		if(erros){
			return;
		}

		agendaModel.removerAgendamento(agendaParaRemover, function(error, result){
			res.redirect('/agenda');
		})

	})

	app.post('/agenda/pesquisar', function(req,res){
		var palavraChave = req.body.pesquisar;

		if(palavraChave == ""){
			console.log("Digite alguma coisa");
			return;
		}

		var connection = app.config.dbConnection();
		var agendaModel =  new app.app.models.AgendaDAO(connection);
		

		//retorna erros em json
		var erros = req.validationErrors();
		console.log(erros);
		if(erros){
			return;
		}

		agendaModel.pesquisarAgendamento(palavraChave, function(error, result){
			res.render('agenda/agenda', {agenda : result});
		})

	})

	app.post('/agenda/editar', function(req,res){
		var id = req.body.editar;

		if(id == ""){
			console.log("Digite alguma coisa");
			return;
		}
		
		var connection = app.config.dbConnection();
		var agendaModel =  new app.app.models.AgendaDAO(connection);
		

		//retorna erros em json
		var erros = req.validationErrors();
		console.log(erros);
		if(erros){
			return;
		}

		agendaModel.pesquisarAgendamentoPorID(id, function(error, result){
			var idParaEditar = req.body.editar;
			res.render('agenda/agendamento', {agenda : result, idParaEditar : idParaEditar});
		})

	})

	app.post('/adicionar', function(req,res){
		res.render('admin/form_add_agendamento', {validacao:{}, agendamento : {}});
	})
}