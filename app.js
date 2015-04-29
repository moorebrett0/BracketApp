var bracketApp = angular.module('BracketApp', ['ui.router'])

    bracketApp.config(function($stateProvider) {
        $stateProvider.state("home", {
            url: "",
            templateUrl: "partials/home.html"
        });

        $stateProvider.state("tournament", {
            url: "tourny",
            templateUrl: "partials/tournament.html",
            controller: "PlayerCtrl"
        });

        $stateProvider.state("bracket", {
            url: "bracket",
            templateUrl: "partials/bracket.html",
            controller: "PlayerCtrl"
        });
    });
