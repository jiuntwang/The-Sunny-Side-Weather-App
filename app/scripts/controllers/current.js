'use strict';

/**
 * @ngdoc function
 * @name theSunnySideWeatherAppApp.controller:CurrentCtrl
 * @description
 * # CurrentCtrl
 * Controller of the theSunnySideWeatherAppApp
 */
angular.module('theSunnySideWeatherAppApp')
  .controller('CurrentCtrl', function ($scope, $routeParams, current) {
    $scope.cityID = $routeParams.cityID;

    $scope.currentWeather = current.query({
        cityID: $routeParams.cityID
    });
  });
