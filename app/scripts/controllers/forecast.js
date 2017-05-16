'use strict';

/**
 * @ngdoc function
 * @name theSunnySideWeatherAppApp.controller:ForecastCtrl
 * @description
 * # ForecastCtrl
 * Controller of the theSunnySideWeatherAppApp
 */
angular.module('theSunnySideWeatherAppApp')
  .controller('ForecastCtrl', function ($scope, $routeParams, forecast) {
    $scope.cityID = $routeParams.cityID;

    $scope.forecastData = forecast.query({
        cityID: $routeParams.cityID
    });
  });
