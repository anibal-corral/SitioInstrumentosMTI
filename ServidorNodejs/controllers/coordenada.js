		'use strict'
		const Coordenada = require('../models/coordenada');

		function getCoordenada(req, res){
			return res.status(200).send("getCoordenada Ready");
		}
		function getCoordenadas(req, res){
			return res.status(200).send("getCoordenada Ready");
		}
		function updateCoordenada(req, res){
			return res.status(200).send("getCoordenada Ready");
		}
		function deleteCoordenada(req, res){
			return res.status(200).send("getCoordenada Ready");
		}
		function saveCoordenada(req, res){
			return res.status(200).send("getCoordenada Ready");
		}

		module.exports = {
			getCoordenada,
getCoordenadas,
updateCoordenada,
deleteCoordenada,
saveCoordenada
		};