'use strict';

/**
 * @ngdoc service
 * @name theSunnySideWeatherAppApp.citysearch
 * @description
 * # citysearch
 * Factory in the theSunnySideWeatherAppApp.
 */
angular.module('theSunnySideWeatherAppApp')
  .factory('citysearch', function ($resource) {
    // Service logic
    // ...


    // Public API here
return $resource('http://api.openweathermap.org/data/2.5/find?q=:query&type=like&mode=json&APPID=260156459874096ef4f2b7fcb520a496', {}, {
      find: {
        method: 'GET',
        params: {
          query: 'seattle'
        },
        isArray: false
      }
    });
  });