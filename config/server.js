//chamando o express
var express = require('express');

//chamando o consign
var consign = require('consign');

var bodyParser = require('body-parser');

var expressValidator = require('express-validator');

//ativando ele express
var app = express();

//configurando para virar "ejs"
app.set('view engine', 'ejs');
//configurando diretório de views
app.set('views','./app/views');

app.use(bodyParser.urlencoded({extend: true}));
app.use(expressValidator());
app.use(express.static('libraries'));

consign().include('app/routes').then('config/dbConnection.js').then('app/models').into(app);

module.exports = app;