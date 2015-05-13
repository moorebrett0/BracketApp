bracketApp.controller('BracketCtrl', function BracketCtrl($scope, PlayersFactory) {
    $scope.PlayersFactory = PlayersFactory;
    $scope.players = PlayersFactory.players;

});
