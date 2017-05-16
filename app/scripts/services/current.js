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
    return $resource('http://api.openweathermap.org/data/2.5/weather?q=:location&units=imperial&APPID=', {}, {
      query: {
        method:'GET',
        params:{
          cityID: '4717560' // Paris, France ID
        },
        isArray:false
      }
    });
  });