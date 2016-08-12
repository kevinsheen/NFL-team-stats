'use strict';

describe('Service: TeamStats', function () {

  // load the service's module
  beforeEach(module('nflteamstatsApp'));

  // instantiate service
  var TeamStats;
  beforeEach(inject(function (_TeamStats_) {
    TeamStats = _TeamStats_;
  }));

  it('should do something', function () {
    expect(!!TeamStats).toBe(true);
  });

});
