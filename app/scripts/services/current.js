'use strict';

/**
 * @ngdoc service
 * @name theSunnySideWeatherAppApp.current
 * @description
 * # current
 * Factory in the theSunnySideWeatherAppApp.
 */
angular.module('theSunnySideWeatherAppApp')
  .factory('current', function ($resource) {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return $resource('http://api.openweathermap.org/data/2.5/weather?q=:location&units=imperial&APPID=260156459874096ef4f2b7fcb520a496', {}, {
      query: {
        method:'GET',
        params:{
          location: 'Seattle,us'
        },
        isArray:false
      }
    });
  });