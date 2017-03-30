		'use strict'
		const Producto = require('../models/producto');
		const Establecimiento = require('../models/establecimiento');
 		//var allowedOrigins = ['http://127.0.0.1:8020', 'http://localhost:8020', 'http://127.0.0.1:9000', 'http://localhost:9000']
		
		function obtenerProducto(req, res){
			//GUARDAMOS EL ID
		let productoId = req.params.productoId;
		//BUSCO EL PRODUCTO
		Producto.findById(productoId).populate('_creator').exec(function(err, producto){
			if(err){
			console.log("error al obtener el instrumento: " + err);	
				return res.status(500).send({message: `Erro al realizar la petición ${err}`});
		} else if(!producto){
				res.status(404).send({message: "No hay productos"});
			}else{
				console.log(producto);
				res.status(200).send({producto:producto});
				
				//res.status(200).send({productos: productos});
			}

		});
		/*Producto.findById(productoId, function(err, producto){
		if(err){
			return res.status(500).send({message: `Erro al realizar la petición ${err}`});
		}else if(!producto){
		return res.status(404).send({message:'El producto no existe'});
		}else {console.log("**************** ESTOY LEYENDO EL PRODUCTO SOLICITADO");
		console.log(producto);
	return		res.status(200).send({producto});
		}
	});*/

	};

		function obtenerProductos(req, res ){
			Producto.find({}).populate('_creator').exec(function(err, productos){
				if(err){
				console.log("error al obtener el instrumento: " + err);	
					return res.status(500).send({message: `Erro al realizar la petición ${err}`});
			} else if(!productos){
				res.status(404).send({message: "No hay productos"});
			}else{
				res.status(200).send({instrumentos:productos});
			}
			});
		
		};

		function actualizarProducto(req, res){
console.log("ACTUALIZANDO EL INSTRUMENTO");
debugger;
			let productoId=req.params.productoId;
			console.log("ID INSTRUMENTO: " + productoId);
			var update = req.body;
		

			Producto.findByIdAndUpdate(productoId, update, function(err, productoActualizado){
	if(err){
		return res.status(500).send({message:"error al borrar el producto"});
	}else{
		return res.status(200).send({producto: productoActualizado});
	}



			});

		};

		function eliminarProducto(req, resp){
			let productoId = req.params.productoId;
			console.log("removiendo Instrumento " + productoId);
			Producto.findByIdAndRemove(productoId,function(err){
			if(err){
				return resp.status(500).send({message:"error al borrar el instrumento" + err});
			}else{
				console.log("REGISTRO producto BORRADO: ");
				return resp.status(200).send({message:"Registro borrado"});
			}
				});
		};

		function grabarProducto(req, res){
		console.log('POST /api/producto');
		//Obtengo el ID del Establecimiento asociado.
		console.log('Obtengo el ID del Establecimiento asociado.');
		var id_establecimiento = req.body.id_establecimiento;
		//busco el Establecimiento
		console.log('ID asociado = ' + id_establecimiento);
		Establecimiento.findById(id_establecimiento, function(err,establecimiento){
			console.log(establecimiento);
			if(err)res.status(500).send("Error");
			console.log("Id establecimiento: " + establecimiento._id);
			//voy a leer el producto
			let producto = new Producto();
				producto.codigo = req.body.codigo;
				producto.nombre = req.body.nombre;
				producto.precio = req.body.precio;
				producto.descripcion= req.body.descripcion;
				producto.marca=req.body.marca;
				producto.modelo=req.body.modelo;
				producto.origen=req.body.origen;
				producto._creator=establecimiento._id;

			//Ahora voy a grabar el instrumento
			producto.save(function(err, productoStored){

				if(err)res.status(500).send("Error en el save del producto");
				console.log("El producto almacenado es: " + productoStored);
				console.log("Ahora pasaré a almacenar el id del producto en el establecimiento");
				Establecimiento.update({_id: establecimiento._id}, {$push:{instrumentos:productoStored._id}},function(err,nose){
				if(err){console.log("error: " + err);}else{
					res.status(200).send({producto: productoStored});
				}	
				});

				
			});	
			});
			};		

			
			

		
		
		/*, function(err, establecimiento){
			if(err) {
				console.log("Error al buscar el establecimiento en producto " + err);
				res.status(500).send({message: `Error al buscar el establecimiento en producto ${err}`});
			}});
			*/

	

/*
		function grabarProducto(req, res){
		console.log('POST /api/producto');
		console.log(req.body);
		//Obtengo el ID del Establecimiento asociado.
		console.log('Obtengo el ID del Establecimiento asociado.');
		var id_establecimiento = req.body.id_establecimiento;
		//busco el establecimiento
		Establecimiento.findById(id_establecimiento, function(err, establecimiento){
			if(err) {
				console.log("Error al buscar el establecimiento en producto " + err);
				res.status(500).send({message: `Error al buscar el establecimiento en producto ${err}`});}
			else{
				console.log("Establecimiento encontrado al guardar el instrumento" + establecimiento);
				//GUARDAMOS EN LA BD EL INSTRUMENTO
				//CREAMOS EL PRODUCTO CON LO QUE E MANDA EN EL REQUEST
				let producto = new Producto();
				producto.codigo = req.body.codigo;
				producto.nombre = req.body.nombre;
				producto.precio = req.body.precio;
				producto.descripcion= req.body.descripcion;
				producto.marca=req.body.marca;
				producto.modelo=req.body.modelo;
				producto.origen=req.body.origen;
				producto._creator=establecimiento._id;
				//LO GUARDO
				producto.save(function(err, productoStored){
					console.log("ESTOY GUARDANDO EL PRODUCTO " + producto);
					if(err){
					res.status(500).send({message: `Error al guardar ${err}`});
				}else{
					establecimiento.pussh({instrumento:productoStored});

					res.status(200).send({producto: productoStored});
				}
			});
			
			}//fin else

		});
		
		};
*/


		module.exports = {
			obtenerProducto,
			obtenerProductos,
			actualizarProducto,
			eliminarProducto,
			grabarProducto
		};