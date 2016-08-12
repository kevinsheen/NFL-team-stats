'use strict';

describe('Controller: 49ersCtrl', function () {

  // load the controller's module
  beforeEach(module('nflteamstatsApp'));

  var 49ersCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    49ersCtrl = $controller('49ersCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(49ersCtrl.awesomeThings.length).toBe(3);
  });
});
