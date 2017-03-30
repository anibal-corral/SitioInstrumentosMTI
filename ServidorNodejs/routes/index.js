'use strict'

	const express = require('express');
	const api = express.Router();
	const controladorProducto= require('../controllers/producto');
	const controladorCoordenada= require('../controllers/coordenada');
	const controladorEstablecimiento= require('../controllers/establecimiento');
	const controladorUbicacion= require('../controllers/ubicacion');
	//Agrego las "escuchas", con el :name le estoy diciendo que
	//DECLARO LA RUTA GET PARA OBTENER TODOS LOS INSTRUMENTOS
	api.get('/producto', controladorProducto.obtenerProductos);
	//DECLARO LA RUTA GET PARA OBTENER POR ID
	api.get('/producto/:productoId', controladorProducto.obtenerProducto);
	//DECLARO LA RUTA POST PARA OBTENER 
	api.post('/producto', controladorProducto.grabarProducto);
	//ACTUALIZAR UN INSTRUMENTO
	api.put('/producto/:productoId', controladorProducto.actualizarProducto);
	//ELIMINAR UN INSTRUMENTO
	api.delete('/producto/:productoId', controladorProducto.eliminarProducto);

//ESTO ES PARA LAS COORDENADAS
	api.get('/coordenada', controladorCoordenada.getCoordenadas);
	//DECLARO LA RUTA GET PARA OBTENER POR ID
	api.get('/coordenada/:coordenadaId', controladorCoordenada.getCoordenada);
	//DECLARO LA RUTA POST PARA OBTENER 
	api.post('/coordenada', controladorCoordenada.saveCoordenada);
	//ACTUALIZAR UN INSTRUMENTO
	api.put('/coordenada/:coordenada', controladorCoordenada.updateCoordenada);
	//ELIMINAR UN INSTRUMENTO
	api.delete('/coordenada/:coordenada', controladorCoordenada.deleteCoordenada);


//PARA LOS ESTABLECIMIENTOS
	api.get('/establecimiento', controladorEstablecimiento.obtenerEstablecimientos);
	//DECLARO LA RUTA GET PARA OBTENER POR ID
	api.get('/establecimiento/:establecimientoId', controladorEstablecimiento.obtenerEstablecimiento);
	//DECLARO LA RUTA POST PARA OBTENER 
	api.post('/establecimiento', controladorEstablecimiento.grabarEstablecimiento);
	//ACTUALIZAR UN INSTRUMENTO
	api.put('/establecimiento/:establecimientoId', controladorEstablecimiento.actualizarEstablecimiento);
	//ELIMINAR UN INSTRUMENTO
	api.delete('/establecimiento/:establecimientoId', controladorEstablecimiento.eliminarEstablecimiento);

//ESTO ES PARA LA UBICACION
	api.get('/ubicacion', controladorUbicacion.getUbicaciones);
	//DECLARO LA RUTA GET PARA OBTENER POR ID
	api.get('/ubicacion/:ubicacionId', controladorUbicacion.getUbicacion);
	//DECLARO LA RUTA POST PARA OBTENER 
	api.post('/ubicacion', controladorUbicacion.saveUbicacion);
	//ACTUALIZAR UN INSTRUMENTO
	api.put('/ubicacion/:ubicacionId', controladorUbicacion.updateUbicacion);
	//ELIMINAR UN INSTRUMENTO
	api.delete('/ubicacion/:ubicacionId', controladorUbicacion.deleteUbicacion);


	module.exports = api;