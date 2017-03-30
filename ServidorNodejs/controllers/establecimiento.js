		'use strict'
		const Establecimiento = require('../models/establecimiento');
		/*PARA OBTENER EL ESTABLECIMIENTO*/
		function obtenerEstablecimiento(req, res){
		//GUARDAMOS EL ID QUE QUEREMOS BUSCAR
		let establecimientoId = req.params.establecimientoId;
		//BUSCO EL ESTABLECIMIENTO
		console.log("ESTOY BUSCANDO EL ESTABLECIMIENTO: " + establecimientoId);
		Establecimiento.findById(establecimientoId, function(err, establecimiento){
			console.log("estoy buscando el establcimiento");
		if(err){
			console.log("Salió Erro al buscar el esetablecimiento");
		return res.status(500).send({message: `Erro al realizar la petición ${err}`});
		}else if(!establecimiento){
			console.log("El establecimiento no existe");
		return res.status(404).send({message:'El establecimiento no existe'});
		}
	}).populate('instrumentos').exec(function(err, establecimiento){
			if(err){
			console.log("Error al poblar los instrumentos al establecimiento " + err);	
			return res.status(500).send({message: `Erro al  reallizar la population ${err}`});
		} else {
			console.log("No hay erro al poblar el establecimiento " + establecimiento);
			return		res.status(200).send({establecimiento});
		};
	});
}

		function obtenerEstablecimientos(req, res ){
		Establecimiento.find({},function(err,establecimientos){
			if (err) {
		return res.status(500).send({message: "error"});
			}else if(!establecimientos){
				res.status(404).send({message: "No hay establecimientos"});
			}else{
			
			console.log(establecimientos);
			res.json(establecimientos);
				//res.status(200).send({establecimientos: establecimientos});
			}
		});
		};

		function actualizarEstablecimiento(req, res){
			
		let establecimientoId=req.params.establecimientoId;
		console.log("aCTUALIZANDO EL ESTABLECIMIENTO: " + establecimientoId);
		var update = req.body;
		Establecimiento.findByIdAndUpdate(establecimientoId, update, function(err, establecimientoActualizado){
		if(err){
		return res.status(500).send({message:"error al actualizar  el establecimiento"});
			}else{
		return res.status(200).send({establecimiento: establecimientoActualizado});
			}
		});
		};

		function eliminarEstablecimiento(req, resp)
		{
				
				let establecimientoId = req.params.establecimientoId;
				console.log("El id de establciemiento es: " + establecimientoId);	
				Establecimiento.findByIdAndRemove(establecimientoId,function(err, establecimiento){
					if(err){
						return resp.status(500).send({message:"error al borrar el establecimiento" + err});
					}else{
						console.log("REGISTRO ESTABLECIMIENTO BORRADO: " + establecimientoId);
						return resp.status(200).send({message:"Registro borrado"});
					}
				});


		};

		function grabarEstablecimiento(req, res){
		console.log('POST /api/establecimiento');
		let establecimiento = new Establecimiento();
		establecimiento.nombre= req.body.nombre,
		establecimiento.rut = req.body.rut;
		establecimiento.ubicacion = req.body.ubicacion;
		establecimiento.telefono= req.body.telefono;
		establecimiento.horario=req.body.horario;
		//LO GUARDO 1313
		establecimiento.save(function(err, establecimientoStored){
		console.log("ESTOY GUARDANDO EL establecimiento " + establecimiento);
		if(err){
			res.status(500).send({message: `Error al guardar ${err}`});
		}else{
			res.status(200).send({establecimiento: establecimientoStored});
		}
	});
		};

		module.exports = {
			obtenerEstablecimiento,
			obtenerEstablecimientos,
			actualizarEstablecimiento,
			eliminarEstablecimiento,
			grabarEstablecimiento
		}