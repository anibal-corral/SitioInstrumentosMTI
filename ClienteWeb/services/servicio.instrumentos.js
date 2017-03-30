'use strict'
app.factory('InstrumentoFactory', function($http){
	//var url = 'http://localhost:9281/api/producto/';
	var url = 'http://localhost:9281/api/producto/';
	var vInstrumentoFactory={
		getInstrumentos: function(){
			console.log("Ingresando a la función para obtener Instrumentos");
			return $http.get(url).then(function successCallback(response){
				console.log("LA FUNCTION SUCCESS CALLBACK PARA LISTADO DE INSTRUMENTOS");
				return response;
			}, function errorCallback(response){
				console.log("LA FUNCION ERROR HA DADO ERROR")
			});
		},
		getInstrumento: function(id){
			console.log("en getInstrumento del factory recibo este id: " + id);
			console.log("Y la url a consultar sería:  " + id);
 // Cuando se cargue la página, pide todos los productos
    return $http.get(url+id)
        .then(function successCallback(response) {
        	console.log("LA FUNCTION SUCCESS CALLBACK PARA UN SOLO INSTRUMENTO");
            return response;
        }, function errorCallback(response) {
            console.log('Error: ' + response);
        });
},
		createInstrumento:function(instrumento){
			console.log("Ingresando al Crear Instrumento");
			return $http.post(url, instrumento).then(function successCallback(response){
				console.log("Función success para grabar el instrumento");
            return response;
			}, function errorCallback(response){
			console.log('Error: ' + response);
			});
		},
			removeInstrumento:function(instrumento){
			console.log("Ingresando al Remover Instrumento " + instrumento );
			return $http.delete(url+instrumento._id, instrumento).then(function successCallback(response){
				console.log("Función success para eliminar un instrumento ");
            return response;
			}, function errorCallback(response){
			console.log('Error: ' + response);
			});
		},
		updateInstrumento:function(instrumento){
			console.log("Ingresando al Actualizar Instrumento");
			console.log("La url para actualizar sería: " + url+instrumento._id);

			return $http.put(url+instrumento._id, instrumento).then(function successCallback(response){
				console.log("Función success para actualizar el instrumento");
            return response;
			}, function errorCallback(response){
			console.log('Error al actualizar el instrumento: ' + response);
			});
			
		}
	};
	console.log("Ahora devuelvo el objeto vInstrumentoFactory");
	return vInstrumentoFactory;
});