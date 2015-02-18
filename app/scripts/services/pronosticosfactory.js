'use strict';

/**
 * @ngdoc service
 * @name tarea1PronosticosApp.PronosticosFactory
 * @description
 * # PronosticosFactory
 * Factory in the tarea1PronosticosApp.
 */
angular.module('tarea1PronosticosApp')
  .factory('PronosticosFactory', ['$http', '$q', function ($http, $q) {

    var url = 'http://api.openweathermap.org/data/2.5/forecast';

    return {

      getPronosticos: function (zipCode, days) {
        var defer = $q.defer();
        $http({
          method: 'GET',
          url: url,
          params: {
            q: zipCode,
            mode: 'json',
            units: 'metric',
            lang: 'sp',
            cnt: days
          }
        }).success(function (data, status, headers, config){
          defer.resolve(data);
        }).error(function(data, status, headers, config){
          defer.reject(data);
        });

        return defer.promise;
      }

    };
  }]);
