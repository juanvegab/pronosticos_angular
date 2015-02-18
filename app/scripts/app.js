'use strict';

/**
 * @ngdoc overview
 * @name tarea1PronosticosApp
 * @description
 * # tarea1PronosticosApp
 *
 * Main module of the application.
 */
angular
  .module('tarea1PronosticosApp', [
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/pronostico', {
        templateUrl: 'views/pronostico.html',
        controller: 'PronosticoCtrl'
      })
      .when('/pronostico/:zipcode', {
        templateUrl: 'views/pronostico.html',
        controller: 'PronosticoCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
