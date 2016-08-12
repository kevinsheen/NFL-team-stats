'use strict';

/**
 * @ngdoc service
 * @name nflteamstatsApp.Teams
 * @description
 * # Teams
 * Factory in the nflteamstatsApp.
 */
angular.module('nflteamstatsApp')
  .factory('Teams', function ($resource) {
    // Service logic
    // ...

    // Public API here
    return $resource('https://crossorigin.me/http://api.sportradar.us/nfl-ot1/league/hierarchy.json?api_key=389g6jbbaj8ujf3nc97b6wj3', {}, {
      query: {
        method:'GET',
        
        isArray:false
      }
    });
  });
