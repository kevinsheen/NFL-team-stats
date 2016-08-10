'use strict';

/**
 * @ngdoc function
 * @name workspaceApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the workspaceApp
 */
angular.module('workspaceApp')
  .controller('MainCtrl', function ($scope, current) {
    $scope.current = current.query();
  
$scope.league=[
  {name : "San Francisco 49ers"},
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

/** $scope.cars = [
        {model : "San Francisco 49ers", stats : "2015 Team Stats"},
        {model : "Chicago Bears", stats : "white"},
        {model : "Cincinatti Bengals", stats : "black"},
        {model : "Chicago Bears", stats : "white"},
        {model : "Buffalo Bills", stats : "white"},
        {model : "Denver Broncos", stats : "white"},
        {model : "Cleveland Browns", stats : "white"},
        {model : "Tampa Bay Buccaneers", stats : "white"},
        {model : "Arizona Cardinals", stats : "white"},
        {model : "San Diego Chargers", stats : "white"},
        {model : "Kansas City Chiefs", stats : "white"},
        {model : "Indianapolis Colts", stats : "white"},
        {model : "Dallas Cowboys", color : "white"},
        {model : "Miami Dolphins", color : "white"},
        {model : "Philadelphia Eagles", color : "white"},
        {model : "Atlanta Falcons", color : "white"},
        {model : "New York Giants", color : "white"},
        {model : "Jacksonville Jaguars", color : "white"},
        {model : "New York Jets", color : "white"},
        {model : "Detroit Lions", color : "white"},
        {model : "Green Bay Packers", color : "white"},
        {model : "Carolina Panthers", color : "white"},
        {model : "New England Patriots", color : "white"},
        {model : "Oakland Raiders", color : "white"},
        {model : "Los Angeles Rams", color : "white"},
        {model : "Baltimore Ravens", color : "white"},
        {model : "Washington Redskins", color : "white"},
        {model : "New Orleans Saints", color : "white"},
        {model : "Seattle Seahawks", color : "white"},
        {model : "Pittsburgh Steelers", color : "white"},
        {model : "Houston Texans", color : "white"}, 
        {model : "Tennessee Titans", color : "white"}, 
        {model : "Minnesota Vikings", color : "white"}
        
    ];
    */