module.exports = function(app){
	app.get('/formulario_inclusao_agendamento', function(req, res){
		res.render('admin/form_add_agendamento', {validacao:{}, agendamento : {}});
	});

	app.post('/agenda/salvar', function(req, res){
		var agendamento = req.body;

		//validando o formulário
		req.assert('name','Nome é obrigatório').notEmpty();
		req.assert('telephone','Telefone é obrigatório').notEmpty();
		req.assert('email','Email é obrigatório').notEmpty();

		//retorna erros em json
		var erros = req.validationErrors();
		console.log(erros);
		if(erros){
			res.render("admin/form_add_agendamento", {validacao : erros, agendamento : agendamento});
			return;
		}

		//fazendo conexao com banco
		var connection = app.config.dbConnection();
		var agendaModel = new app.app.models.AgendaDAO(connection);

		//model
		agendaModel.salvarAgendamento(agendamento, function(error, result){
	 		//passando tudo pra view
	 		res.redirect('/agenda');
	 	});
		

		//depois temos que salvar noticia
		//callback listando noticias
	});
}