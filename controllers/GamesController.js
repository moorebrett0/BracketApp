 bracketApp.controller('GameCtrl', function($scope, PlayersCtrl, PlayersFactory) {
     $scope.players = PlayersFactory.players;
     $scope.PlayersFactory = PlayersFactory;

     $scope.wonGame = function() {
         player.won = true;
     }
        player.won = false;

});
