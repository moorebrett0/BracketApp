bracketApp.controller('BracketCtrl', function BracketCtrl($scope, PlayersFactory) {
    $scope.PlayersFactory = PlayersFactory;
    $scope.players = PlayersFactory.players;



    $scope.oneOrMore = function (value, index) {
        if (value.wins >= 1) {
            return true;
        }
    }

    $scope.twoOrMore = function(value, index) {
        if (value.wins >= 2) {
            return true;
        }
    }

});
