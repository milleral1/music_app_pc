'use strict';

angular.module('musicPcApp')
  .controller('MainCtrl', function ($scope, Auth, Party) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    


    $scope.partySelected = function(party) {
    
      $scope.selectedParty = party;
    Party.getUserParties().success(function(data) {
      $scope.parties = data.user.parties;
    });

    $scope.partySelected = function(party) {
      Party.getParty(party.id).success(function(data) {
        $scope.party = data.party; 
      });
    };

    $scope.songSelected = function(song) {
      $scope.selectedSong = song;
    };
  });
