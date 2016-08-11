'use strict';

/**
 * @ngdoc function
 * @name nflstatsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the nflstatsApp
 */
angular.module('nflstatsApp')
  .controller('MainCtrl', function ($scope, current) {
    $scope.current = current.query();
  
$scope.league=[
  {name : "San Francisco 49ers", stats : "2015 team stats"},
  {name : "Chicago Bears"},
  {name : "Cincinatti Bengals"},
  {name : "Buffalo Bills"},
  {name : "Denver Broncos"},
  {name : "Cleveland Browns"},
  {name : "Tampa Bay Buccaneers"},
  {name : "Arizona Cardinals"},
  {name : "San Diego Chargers"},
  {name : "Kansas City Chiefs"},
  {name : "Indianapolis Colts"},
  {name : "Dallas Cowboys"},
  {name : "Miami Dolphins"},
  {name : "Philadelphia Eagles"},
  {name : "Atlanta Falcons"},
  {name : "New York Giants"},
  {name : "Jacksonville Jaguars"},
  {name : "New York Jets"},
  {name : "Detroit Lions"},
  {name : "Green Bay Packers"},
  {name : "Carolina Panthers"},
  {name : "New England Patriots"},
  {name : "Oakland Raiders"},
  {name : "Los Angeles Rams"},
  {name : "Baltimore Ravens"},
  {name : "Washington Redskins"},
  {name : "New Orleans Saints"},
  {name : "Seattle Seahawks"},
  {name : "Pittsburgh Steelers"},
  {name : "Houston Texans"},
  {name : "Tennessee Titans"},
  {name : "Minnesota Vikings"}
 
]; 

});

