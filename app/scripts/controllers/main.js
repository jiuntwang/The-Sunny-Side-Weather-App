'use strict';

/**
 * @ngdoc function
 * @name theSunnySideWeatherAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the theSunnySideWeatherAppApp
 */
angular.module('theSunnySideWeatherAppApp')
  .controller('MainCtrl', function ($scope, citysearch) {
    $scope.citiesFound = citysearch.find();

    $scope.findCities = function(){
        $scope.citiesFound = citysearch.find({
            query: $scope.location
        });
        $scope.searchQuery = $scope.location;
    };
  });
