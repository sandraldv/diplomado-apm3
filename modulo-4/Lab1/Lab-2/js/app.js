angular.module('initial_spi', ['ngRoute', 'initial_spi.controllers'])

.config(['$routeProvider', function($routeProvider){
	/*
	 * `when()` cuantas veces sea necesario
	 * `otherwise()` una sola vez "OJO"
	*/
	$routeProvider

	.when('/products', {
	    templateUrl : "views/products.html",
	    controller: 'mobileController'
	})

	.otherwise({
	    redirectTo: '/',
	    templateUrl: 'otherwise.html'
	});
 }]);