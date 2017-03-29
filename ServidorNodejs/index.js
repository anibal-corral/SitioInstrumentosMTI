	'use strict'

	const app = require('./app');
	const mongoose = require('mongoose'); //Para el módulo de mongoose
	const config = require('./config');
	
	//PARA CONECTAR A LA BASE DE DATOS.
	mongoose.connect(config.db,function(err,res){
		if(err) {

		return console.log(`Error al conectar a la base de datos: ${err}`);	
		}
			console.log("conexión a la BD OK");
		//para iniciaR EL SERVER
	app.listen(config.port, function(){
		console.log("API CORRIENDO");
	});
	});

