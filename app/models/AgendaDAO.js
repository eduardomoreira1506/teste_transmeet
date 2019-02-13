function AgendaDAO(connection){
	this._connection = connection;
}

AgendaDAO.prototype.getAgenda = function(callback){
	this._connection.query('select * from agenda', callback)
}

AgendaDAO.prototype.removerAgendamento = function(agendamento, callback){
	this._connection.query('delete from agenda where id = ?', agendamento, callback);
}

AgendaDAO.prototype.salvarAgendamento = function(agendamento, callback){
	this._connection.query('insert into agenda set ? ', agendamento, callback);
}

AgendaDAO.prototype.pesquisarAgendamento = function(palavraChave, callback){
	this._connection.query("select * from agenda where name LIKE '%" + palavraChave + "%' or email LIKE '%" + palavraChave + "%' or telephone LIKE '%" + palavraChave + "%'", callback);
}

AgendaDAO.prototype.pesquisarAgendamentoPorID = function(id, callback){
	this._connection.query("select * from agenda where id = ?", id, callback);
}

AgendaDAO.prototype.editarAgendamento = function(idParaEditar, name, telephone, email, callback){
	this._connection.query("update agenda set name = '" + name + "', telephone = " + telephone + ", email = '" + email +  "' where id = " + idParaEditar, callback);
}

module.exports = function(){
	return AgendaDAO;
}