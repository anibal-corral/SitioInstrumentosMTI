'use strict'

/**
*  Module
*
* Description
*/
//AQUI DECLARO EL APP PRINCIPAL
var app = angular.module('appInstrumentos', ['ngRoute']);

app.config(function($routeProvider){

	$routeProvider
	.when("/banana",{
		template:"<h1>ESTAS SON UNAS PUTAS BANANAS QUE SALEN EN W3SCHOOL</h1>"
	})
	.when("/instrumento",{
			templateUrl:"views/listado_instrumentos.html",
			controller: "ControllerInstrumento"
	})
	.when("/instrumento/:id",{
			templateUrl:"views/ver_instrumento.html",
			controller: "ControllerCrudInstrumento"
	})
	.when("/addinstrumento",{
			templateUrl:"views/ver_instrumento.html",
			controller: "ControllerCrudInstrumento"
	})
	.when("/establecimiento",{
			templateUrl:"views/listado_establecimientos.html",
			controller: "ControllerEstablecimiento"
	})
	.when("/addestablecimiento",{
			templateUrl:"views/ver_establecimiento.html",
			controller: "ControllerCrudEstablecimiento"
	})
	.when("/establecimiento/:id",{
			templateUrl:"views/ver_establecimiento.html",
			controller: "ControllerCrudEstablecimiento"
	})
	.otherwise({
			template:"<h1>ESTAS EN LA PÁGINA PRINCIPAL QUE HICIMOS CON EL EQUIPO DE LA JP MÁS LINDA DEL MUNDO</h1>"
	});
});

app.config(function($httpProvider) {
	delete $httpProvider.defaults.headers.common['X-Requested-With'];
});

