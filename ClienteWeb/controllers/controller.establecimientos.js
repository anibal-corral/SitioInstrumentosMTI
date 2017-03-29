app.controller('ControllerEstablecimiento',function($scope, EstablecimientoFactory){
	console.log("CONTROLADOR DE ESTABLECIMIENTO  INICIALIZADO");
	EstablecimientoFactory.getEstablecimientos().then(function(data){
		console.log(data.data);
		$scope.establecimientos=data.data;
	});
/*
	$scope.obtenerEstablecimientos = function(){
	EstablecimientoFactory.getEstablecimientos().then(function(data){
		console.log(data.data);
		$scope.establecimientos=data.data;
	});
	};
	$scope.obtenerEstablecimiento = function(id){
		console.log("ESTE ES EL ID QUE ESTOY RECIBIENDO " + id);
	EstablecimientoFactory.getEstablecimiento(id).then(function(data){
		console.log(data.data);
		$scope.establecimiento=data.data;
		
	});
	};
*/
});

//DEFINO UN CONTROLADOR PARA LAS ACCIONES DE INSERTAR Y MODIFICAR
app.controller('ControllerCrudEstablecimiento', function($scope, $routeParams,$location, EstablecimientoFactory){
	    var id = $routeParams.id;//este ID es el index de la lista para no tener que ir a buscar el establecimiento nuevamente.
	       var existe = typeof (id) !== 'undefined';

	if(existe){
	EstablecimientoFactory.getEstablecimiento(id).then(function(data){
		console.log(data.data);
		$scope.establecimiento=data.data.establecimiento;
		$scope.titulo=$scope.establecimiento.nombre;
	});	
	}else{
		$scope.titulo='Nuevo establecimiento';
		$scope.establecimiento="";
	}
	
	
	/*
	$scope.guardarEstablecimiento = function(id){
		console.log("ESTE ES EL ID QUE ESTOY RECIBIENDO " + id);
	EstablecimientoFactory.getEstablecimiento(id).then(function(data){
		console.log(data.data);
		$scope.establecimiento=data.data.establecimiento;
		
	});
	};
	*/
	 $scope.actualizarEstablecimiento = function () {
	 	console.log("Voy a actualizar el establecimiento ");
	 	var establecimientoModel = {
	 				nombre: $scope.establecimiento.nombre,
	 				rut:$scope.establecimiento.rut,
	 				ubciacion: $scope.establecimiento.ubicacion,
	 				telefono: $scope.establecimiento.telefono,
	 				horario: $scope.establecimiento.horario,
	 				_id:$scope.establecimiento._id
	 			};
	 			if(existe){
	 				// el Establecimiento ya existía por ende actualizao nomas
	 				EstablecimientoFactory.updateEstablecimiento(establecimientoModel);
	 			}else{
	 				EstablecimientoFactory.createEstablecimiento(establecimientoModel);
	 			}
        
        $location.path('/establecimiento');//Para volver a listar los establecimientos
        
        };
        $scope.crearEstablecimiento = function () {
	 	console.log("Voy a grabar el establecimiento ");
	 	var establecimientoModel = {
	 				nombre: $scope.establecimiento.nombre,
	 				rut:$scope.establecimiento.rut,
	 				ubciacion: $scope.establecimiento.ubicacion,
	 				telefono: $scope.establecimiento.telefono,
	 				horario: $scope.establecimiento.horario,
	 				
	 			};
        EstablecimientoFactory.createEstablecimiento(establecimientoModel);
        $location.path('/establecimiento');//Para volver a listar los establecimientos
        
        };

        
    });

