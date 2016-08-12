'use strict';

/**
 * @ngdoc service
 * @name nflteamstatsApp.TeamStats
 * @description
 * # TeamStats
 * Factory in the nflteamstatsApp.
 */
angular.module('nflteamstatsApp')
  .factory('TeamStats', function ($resource) {
    // Service logic
    // ...

    // Public API here
    return $resource('https://crossorigin.me/http://api.sportradar.us/nfl-ot1/seasontd/2015/reg/teams/:teamid/statistics.json?api_key=389g6jbbaj8ujf3nc97b6wj3', {}, {
      query: {
        method:'GET',
        params: {
          teamid: null
        },
        isArray:false
      }
    });
  });