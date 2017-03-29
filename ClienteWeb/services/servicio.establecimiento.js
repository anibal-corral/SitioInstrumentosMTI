'use strict'
app.factory('EstablecimientoFactory', function($http){

	//var url = 'http://localhost:9281/api/establecimiento/';
	var url = 'http://localhost:9281/api/establecimiento/';
	var vEstablecimientoFactory={
		getEstablecimientos: function(){
			console.log("Ingresando a la función para obtener Establecimientos");
			return $http.get(url).then(function successCallback(response){
				console.log("LA FUNCTION SUCCESS CALLBACK PARA LISTADO DE INSTRUMENTOS");
				return response;
			}, function errorCallback(response){
				console.log("LA FUNCION ERROR HA DADO ERROR")
			});
		},
		getEstablecimiento: function(id){
			console.log("en getEstablecimiento del factory recibo este id: " + id);
			console.log("Y la url a consultar sería:  " + id);
 	// Cuando se cargue la página, pide todos los establecimientos
    return $http.get(url+id)
        .then(function successCallback(response) {
        	console.log("LA FUNCTION SUCCESS CALLBACK PARA UN SOLO INSTRUMENTO");
            return response;
        }, function errorCallback(response) {
            console.log('Error: ' + response);
        });
},
		createEstablecimiento:function(establecimiento){
			console.log("Ingresando al Crear Establecimiento");
			return $http.post(url, establecimiento).then(function successCallback(response){
				console.log("Función success para grabar un establecimiento el establecimiento");
            return response;
			}, function errorCallback(response){
			console.log('Error: ' + response);
			});
		},
		updateEstablecimiento:function(establecimiento){
			console.log("Ingresando al Actualizar Establecimiento");
			console.log("La url para actualizar sería: " + url+establecimiento._id);

			return $http.put(url+establecimiento._id,establecimiento,
			{
			headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
      		},
			}

				).then(function successCallback(response){
				console.log("Función success para actualizar el establecimiento");
            return response;
			}, function errorCallback(response){
			console.log('Error al actualizar el establecimiento: ' + response);
			});
			
		}
	};
	console.log("Ahora devuelvo el objeto vEstablecimientoFactory");
	return vEstablecimientoFactory;
});