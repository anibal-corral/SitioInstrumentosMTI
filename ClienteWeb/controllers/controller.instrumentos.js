app.controller('ControllerInstrumento',function($scope, InstrumentoFactory){
	console.log("CONTROLADOR DE INSTRUMENTO INICIALIZADO");
	InstrumentoFactory.getInstrumentos().then(function(data){
		console.log(data.data);
		$scope.instrumentos=data.data.instrumentos;
		
	});
	 $scope.retirar = function ($index, instrumento) {
	 	console.log("Retirando el instrumento " + $index + " de la lista: "  + instrumento);
        InstrumentoFactory.removeInstrumento(instrumento).then(function(data){
        	console.log(data);
        });
        $scope.instrumentos.splice($index, 1);
        
    }
});

//DEFINO UN CONTROLADOR PARA LAS ACCIONES DE INSERTAR Y MODIFICAR
app.controller('ControllerCrudInstrumento',function($scope, $routeParams,$location, InstrumentoFactory, EstablecimientoFactory){
	    var id = $routeParams.id;//este ID es el index de la lista para no tener que ir a buscar el instrumento nuevamente.
	       var existe = typeof (id) !== 'undefined';

	if(existe){
	InstrumentoFactory.getInstrumento(id).then(function(data){
		console.log(data.data);
		$scope.instrumento=data.data.producto;
		var establecimientos=[];
		establecimientos.push($scope.instrumento._creator);
		
		$scope.titulo=$scope.instrumento.nombre;
		$scope.establecimientos=establecimientos;
	});	
	}else{
		$scope.titulo='Nuevo instrumento';
		$scope.instrumento="";
		EstablecimientoFactory.getEstablecimientos().then(function(data){
			console.log("Ahora aplicaando a la funcion");
				console.log(data.data);
				console.log(data.data.establecimientos);
					$scope.establecimientos=data.data;
	});
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
	 $scope.actualizarInstrumento = function (instrumento) {
	 	console.log("Voy a actualizar el instrumento " + instrumento);
	 			if(existe){
	 				// el Instrumento ya existía por ende actualizao nomas
	 				InstrumentoFactory.updateInstrumento(instrumento);
	 			}else{
	 				InstrumentoFactory.createInstrumento(instrumento);
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
	 				origen: $scope.instrumento.origen,
	 				id_establecimiento:$scope.instrumento.id_establecimiento	
	 			};
        InstrumentoFactory.createInstrumento(instrumentoModel);
        //Para volver a listar los instrumentos
        $location.path('/instrumento');
        };

        
    });

