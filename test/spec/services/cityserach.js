'use strict';

describe('Service: cityserach', function () {

  // load the service's module
  beforeEach(module('theSunnySideWeatherAppApp'));

  // instantiate service
  var cityserach;
  beforeEach(inject(function (_cityserach_) {
    cityserach = _cityserach_;
  }));

  it('should do something', function () {
    expect(!!cityserach).toBe(true);
  });

});
