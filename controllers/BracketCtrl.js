bracketApp.controller('BracketCtrl', function BracketCtrl($scope, PlayersFactory) {
    $scope.PlayersFactory = PlayersFactory;
    $scope.players = PlayersFactory.players;



    $scope.oneOrMore = function (value, index) {
        if (value.wins >= 1) {
            return true;
        }
    };

    $scope.twoOrMore = function(value, index) {
        if (value.wins >= 2) {
            return true;
        }
    };

    $scope.threeOrMore = function(value, index) {
        if (value.wins >= 3) {
            return true;
        }
    };

    $scope.resetWins = function() {
        $scope.players.forEach(function(element) {
            element.wins = 0;
        });
    };

});
