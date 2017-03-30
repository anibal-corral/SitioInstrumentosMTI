//AQUÍ ES DONDE SE HACE LA CONFIGURACIÓN 
'use strict'
const express = require('express');//Llamo al framework express
const bodyParser = require('body-parser');//llamo al middleware para tratar datos rest ...

//Creamos el servidor
	const app = express();
	const api = require('./routes/index');
	app.use(bodyParser.urlencoded({extended: false}));
	app.use(bodyParser.json());
	app.use(function(req, res, next) {

  	res.header("Access-Control-Allow-Origin", "*");
  	res.header("Access-Control-Allow-Methods", 'GET, POST, OPTIONS, PUT, DELETE');
  	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  	next();
	});
	app.use('/api',api);
	module.exports=app;