'use strict';

/**
 * @ngdoc function
 * @name theSunnySideWeatherAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the theSunnySideWeatherAppApp
 */
angular.module('theSunnySideWeatherAppApp')
  .controller('MainCtrl', function ($scope, current) {
      $scope.current = current.query();

      $scope.refreshCurrent = function(){
        $scope.current = current.query({
            location: $scope.location
        });
    };
  });
