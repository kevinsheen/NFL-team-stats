'use strict';

/**
 * @ngdoc service
 * @name workspaceApp.current
 * @description
 * # current
 * Factory in the workspaceApp.
 */
angular.module('workspaceApp')
  .factory('current', function ($resource) {
    // Service logic
    // ...

    // Public API here
    return $resource('https://crossorigin.me/http://api.sportradar.us/nfl-ot1/seasontd/2015/reg/teams/f0e724b0-4cbf-495a-be47-013907608da9/statistics.json?api_key=389g6jbbaj8ujf3nc97b6wj3', {}, {
      query: {
        method:'GET',
        
        isArray:false
      }
    });
  });
