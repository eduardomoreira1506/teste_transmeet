module.exports = function(app){

	app.get('/agendamento', function(req, res){
		//executando a função que o db connection está retornando
		var connection = app.config.dbConnection();
		var agendaModel = new app.app.models.AgendaDAO(connection);

	 	agendaModel.getAgenda(function(error, result){
	 		//passando tudo pra view
	 		res.render("agenda/agendamento", {agenda : result, idParaEditar: idParaEditar});
	 		console.log(idParaEditar)
	 	})
	 });

	app.post('/agendamento/editar', function(req,res){
		var idParaEditar = req.body.id;
		var name = req.body.name;
		var telephone = req.body.telephone;
		var email = req.body.email;

		var connection = app.config.dbConnection();
		var agendaModel =  new app.app.models.AgendaDAO(connection);
		

		//retorna erros em json
		var erros = req.validationErrors();
		console.log(erros);
		if(erros){
			return;
		}

		agendaModel.editarAgendamento(idParaEditar, name, telephone, email, function(error, result){
			res.redirect('/agenda');
		})

	})
}