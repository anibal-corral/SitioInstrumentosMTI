		'use strict'
		const Producto = require('../models/producto');
 		//var allowedOrigins = ['http://127.0.0.1:8020', 'http://localhost:8020', 'http://127.0.0.1:9000', 'http://localhost:9000']
		
		function obtenerProducto(req, res){
			//GUARDAMOS EL ID
		let productoId = req.params.productoId;
		//BUSCO EL PRODUCTO
		Producto.findById(productoId, function(err, producto){
		if(err){
			return res.status(500).send({message: `Erro al realizar la petición ${err}`});
		}else if(!producto){
		return res.status(404).send({message:'El producto no existe'});
		}else {console.log("**************** ESTOY LEYENDO EL PRODUCTO SOLICITADO");
		console.log(producto);
	return		res.status(200).send({producto});
		}
	});};

		function obtenerProductos(req, res ){
		Producto.find({},function(err,productos){
			if (err) {
		return res.status(500).send({message: "error"});
			}else if(!productos){
				res.status(404).send({message: "No hay productos"});
			}else{
				console.log("ESTOY LEYENDO LOS PRODUCTOS Y DEVOLVIENDOLOS")
		console.log(productos);
res.json(productos);
				//res.status(200).send({productos: productos});
			}
		});
		};

		function actualizarProducto(req, res){

			let productoId=req.params.productoId;
	let update = req.body;

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

				Producto.findById(productoId,function(err, producto){

		if(err){
			return res.status(500).send({message:"error al borrar el producto"});
		}else{
			producto.remove(function(err){
				if(err)
		{
		return res.status(500).send({message:"error al borrar el producto"});
		}
		else
		{
			return res.status(200).send({message:"listo"});
		}

			});
		}

				});


		};

		function grabarProducto(req, res){
		//console.log(req.body);
		//res.status(200).send({message: 'Instrumento se ha recibido con el nuevo mensaje'})
		//res.send(200, {message: 'Instrumento se ha recibido'});
		console.log('POST /api/producto');
		console.log(req.body);

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

	//LO GUARDO
	producto.save(function(err, productoStored){
		console.log("ESTOY GUARDANDO EL PRODUCTO " + producto);

		if(err){
			res.status(500).send({message: `Error al guardar ${err}`});
		}else{
			res.status(200).send({producto: productoStored});
		}
	});
		};



		module.exports = {
			obtenerProducto,
			obtenerProductos,
			actualizarProducto,
			eliminarProducto,
			grabarProducto
		};