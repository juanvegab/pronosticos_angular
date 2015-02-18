'use strict';

describe('Service: PronosticoService', function () {

  // load the service's module
  beforeEach(module('tarea1PronosticosApp'));

  // instantiate service
  var PronosticoService;
  beforeEach(inject(function (_PronosticoService_) {
    PronosticoService = _PronosticoService_;
  }));

  it('should do something', function () {
    expect(!!PronosticoService).toBe(true);
  });

});
