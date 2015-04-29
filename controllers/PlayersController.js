bracketApp.controller('PlayerCtrl', function PlayerCtrl($scope, PlayersFactory) {
    $scope.players = PlayersFactory.players;
    $scope.PlayersFactory = PlayersFactory;

    $scope.addPlayer = function() {
        var newPlayer = $scope.playerName;
        PlayersFactory.addPlayer(newPlayer);
        $scope.playerName = null;
    };

    $scope.winner = function(player, wins) {
        player.wins += 1;
    };

    function makeTable(container, data) {
    var table = $("<table/>").addClass('CSSTableGenerator');
    each(data, function(rowIndex, r) {
        var row = $("<tr/>");
        each(r, function(colIndex, c) {
            row.append($("<t"+(rowIndex == 0 ?  "h" : "d")+"/>").text(c));
        });
        table.append(row);
    });
    return container.append(table);
}

});
