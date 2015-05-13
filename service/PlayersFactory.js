bracketApp.factory('PlayersFactory', function PlayersFactory() {
    var factory = {};
    factory.players = [
        {name: "Brian", wins: 0, won: false},
        {name: "Brett", wins: 0, won: false},
        {name: "Greg", wins: 0, won:false},
        {name: "Kyle", wins: 0, won:false},
        {name: "Gurgen", wins: 0, won:false},
        {name: "Tom", wins: 0, won:false},
        {name: "Jon", wins: 0, won:false},
        {name: "Patrick", wins: 0, won:false}
    ];

    factory.addPlayer = function(playerName) {
        factory.players.push({ name: playerName, id: factory.players.length + 1, wins: 0, won: false });
    };

    factory.winner = function(player, wins) {
        player.wins += 1;
    };

    factory.findById = function(collection, id) {
        for (var i = 0; i < collection.length; i++) {
            if (collection[i].id == id) {
                return collection[i];
            }
        }
        return null;
    };

    return factory;
});
