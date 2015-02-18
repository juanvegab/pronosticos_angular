'use strict';

/**
 * @ngdoc function
 * @name tarea1PronosticosApp.controller:PronosticoCtrl
 * @description
 * # PronosticoCtrl
 * Controller of the tarea1PronosticosApp
 */
angular.module('tarea1PronosticosApp')
  .controller('PronosticoCtrl', ['$scope', '$routeParams', 'PronosticosFactory', function ($scope, $routeParams, PronosticosFactory) {

  	$scope.result = {};

  	$scope.getPronostico = function(zipcode) {
  		console.log(zipcode);
  		PronosticosFactory.getPronosticos(zipcode, 5).then(function(data){
  			$scope.result = data;
  		});
  	}

	$scope.$on('$viewContentLoaded', function(){
		if($routeParams.zipcode) {
			$scope.zipcode = $routeParams.zipcode;
			$scope.getPronostico($routeParams.zipcode);
		}
	});

  }]);