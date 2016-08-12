'use strict';

/**
 * @ngdoc function
 * @name nflteamstatsApp.controller:TeamCtrl
 * @description
 * # TeamCtrl
 * Controller of the nflteamstatsApp
 */
angular.module('nflteamstatsApp')
  .controller('TeamCtrl', function ($scope, $routeParams, TeamStats) {
    $scope.teamid = $routeParams.teamid;
    $scope.TeamStats = TeamStats.query({teamid: $scope.teamid});
  });
