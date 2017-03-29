app.controller('ControllerInstrumento',function($scope, InstrumentoFactory){
	console.log("CONTROLADOR DE INSTRUMENTO INICIALIZADO");
	InstrumentoFactory.getInstrumentos().then(function(data){
		console.log(data.data);
		$scope.instrumentos=data.data;
		
	});
/*
	$scope.obtenerInstrumentos = function(){
	InstrumentoFactory.getInstrumentos().then(function(data){
		console.log(data.data);
		$scope.instrumentos=data.data;
	});
	};
	$scope.obtenerInstrumento = function(id){
		console.log("ESTE ES EL ID QUE ESTOY RECIBIENDO " + id);
	InstrumentoFactory.getInstrumento(id).then(function(data){
		console.log(data.data);
		$scope.instrumento=data.data;
		
	});
	};
*/
});

//DEFINO UN CONTROLADOR PARA LAS ACCIONES DE INSERTAR Y MODIFICAR
app.controller('ControllerCrudInstrumento', function($scope, $routeParams,$location, InstrumentoFactory){
	    var id = $routeParams.id;//este ID es el index de la lista para no tener que ir a buscar el instrumento nuevamente.
	       var existe = typeof (id) !== 'undefined';

	if(existe){
	InstrumentoFactory.getInstrumento(id).then(function(data){
		console.log(data.data);
		$scope.instrumento=data.data.producto;
		$scope.titulo=$scope.instrumento.nombre;
	});	
	}else{
		$scope.titulo='Nuevo instrumento';
		$scope.instrumento="";
	}
	
	
	/*
	$scope.guardarInstrumento = function(id){
		console.log("ESTE ES EL ID QUE ESTOY RECIBIENDO " + id);
	InstrumentoFactory.getInstrumento(id).then(function(data){
		console.log(data.data);
		$scope.instrumento=data.data.producto;
		
	});
	};
	*/
	 $scope.actualizarInstrumento = function () {
	 	console.log("Voy a actualizar el instrumento ");
	 	var instrumentoModel = {
	 				codigo: $scope.instrumento.codigo,
	 				nombre: $scope.instrumento.nombre,
	 				precio: $scope.instrumento.precio,
	 				descripcion: $scope.instrumento.descripcion,
	 				marca: $scope.instrumento.marca,
	 				modelo: $scope.instrumento.modelo,
	 				origen: $scope.instrumento.origen,
	 				_id:$scope.instrumento._id
	 			};
	 			if(existe){
	 				// el Instrumento ya existía por ende actualizao nomas
	 				InstrumentoFactory.updateInstrumento(instrumentoModel);
	 			}else{
	 				InstrumentoFactory.createInstrumento(instrumentoModel);
	 			}
        
        $location.path('/instrumento');//Para volver a listar los instrumentos
        
        };
        $scope.crearInstrumento = function () {
	 	console.log("Voy a grabar el instrumento ");
	 	var instrumentoModel = {
	 				codigo: $scope.instrumento.codigo,
	 				nombre: $scope.instrumento.nombre,
	 				precio: $scope.instrumento.precio,
	 				descripcion: $scope.instrumento.descripcion,
	 				marca: $scope.instrumento.marca,
	 				modelo: $scope.instrumento.modelo,
	 				origen: $scope.instrumento.origen
	 			};
        InstrumentoFactory.createInstrumento(instrumentoModel);
        $location.path('/instrumento');//Para volver a listar los instrumentos
        
        };

        
    });

