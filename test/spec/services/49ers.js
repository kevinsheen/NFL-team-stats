'use strict';

describe('Service: 49ers', function () {

  // load the service's module
  beforeEach(module('nflteamstatsApp'));

  // instantiate service
  var 49ers;
  beforeEach(inject(function (_49ers_) {
    49ers = _49ers_;
  }));

  it('should do something', function () {
    expect(!!49ers).toBe(true);
  });

});
