'use strict';

describe('Service: PronosticosFactory', function () {

  // load the service's module
  beforeEach(module('tarea1PronosticosApp'));

  // instantiate service
  var PronosticosFactory;
  beforeEach(inject(function (_PronosticosFactory_) {
    PronosticosFactory = _PronosticosFactory_;
  }));

  it('should do something', function () {
    expect(!!PronosticosFactory).toBe(true);
  });

});
