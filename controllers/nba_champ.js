// nba_champ.js

var db = require("../models");

//routes
module.exports = function(app) {


    // // temp for initial integration using my burgertoos table
    // app.get("/", function(req, res) {
    //     db.players.findAll({}).then(function(dbUser) {
    //     	var playerData = { players:dbUser};
    //     	console.log("playerData ==> " + playerData);
    //         // var playerObject = {
    //         //     players: dbUser
    //         // };
    //         // console.log("dbUser ==> " + JSON.stringify(playerObject));
    //         res.render("index");
    //     });
    // }); 

    // temp for initial integration using my burgertoos table
    app.get("/", function(req, res) {

        // var teamOne = [];
        // var teamTwo = [];

        // var teamOneStr = 0;
        // var teamTwoStr = 0;

        // db.players.findAll({ where: { team: { $in: ["Suns", "Spurs"] } } }).then(function(dbUser) {
        //     // console.log(dbUser);
        //     var playerData = { players: dbUser };

        //     console.log("Players ==> " + playerData.players.length);

        //     for (var loop = 0; loop < playerData.players.length; loop++) {
        //         // console.log("Player ==> " + playerData.players[loop].player_name);
        //         // console.log("Team ==> " + playerData.players[loop].team);
        //         // console.log("position ==> " + playerData.players[loop].position);

        //         var tempSeason = JSON.parse(playerData.players[loop].seasons);

        //         if (tempSeason) {
        //             // console.log("Year JSON ==> " + tempSeason[0].year);
        //             // console.log("Points JSON ==> " + tempSeason[0].teams[0].average.points);
        //             // console.log("Assts JSON ==> " + tempSeason[0].teams[0].average.points);
        //             // console.log("Rebounds JSON ==> " + tempSeason[0].teams[0].average.points);
        //             // console.log("Steals JSON ==> " + tempSeason[0].teams[0].average.steals);
        //             // console.log("Blocks JSON ==> " + tempSeason[0].teams[0].average.blocks);
        //         };
        //         if (playerData.players[loop].team == "Suns") {
        //             if (tempSeason) {
        //                 teamOne.push(tempSeason[0].teams[0].average.points);
        //                 console.log("Suns " + playerData.players[loop].player_name + " == " + tempSeason[0].teams[0].average.points);
        //             };
        //         } else {

        //             if (tempSeason) {
        //                 teamTwo.push(Number(tempSeason[0].teams[0].average.points));
        //                 teamTwoStr += tempSeason[0].teams[0].average.points;
        //                 console.log("Spurs " + playerData.players[loop].player_name + " == " + tempSeason[0].teams[0].average.points);
        //             };

        //         };

        //     };
        //     teamOne.sort(function(a, b) { return b - a });
        //     teamTwo.sort(function(a, b) { return b - a });
        //     console.log("Team1 size ==> " + teamOne.length);
        //     console.log("Team2 size ==> " + teamOne.length);

        //     for (var count1 = 0; count1 < 8; count1++) {
        //         teamOneStr += teamOne[count1];
        //         teamTwoStr += teamTwo[count1];
        //     };

        //     console.log("TeamOneStr Suns==>" + teamOneStr);
        //     console.log("TeamTwoStr Spurs==>" + teamTwoStr);
            res.render("index");
        // });
    });

    app.post("/", function(req, res) {

    	var teamOne = [];
        var teamTwo = [];

        var teamOneStr = 0;
        var teamTwoStr = 0;

        console.log("Timinee");
        console.log(req.body);
        console.log("The BS team is ==> " + req.body.aTeam);
        console.log("The BS team is ==> " + req.body.hTeam);
        if (req.body.myTeams != "") {
            db.players.findAll({ where: { team: { $in: ["Suns", "Spurs"] } } }).then(function(dbUser) {
            // console.log(dbUser);
            var playerData = { players: dbUser };

            console.log("Players ==> " + playerData.players.length);

            for (var loop = 0; loop < playerData.players.length; loop++) {
                // console.log("Player ==> " + playerData.players[loop].player_name);
                // console.log("Team ==> " + playerData.players[loop].team);
                // console.log("position ==> " + playerData.players[loop].position);

                var tempSeason = JSON.parse(playerData.players[loop].seasons);

                if (tempSeason) {
                    // console.log("Year JSON ==> " + tempSeason[0].year);
                    // console.log("Points JSON ==> " + tempSeason[0].teams[0].average.points);
                    // console.log("Assts JSON ==> " + tempSeason[0].teams[0].average.points);
                    // console.log("Rebounds JSON ==> " + tempSeason[0].teams[0].average.points);
                    // console.log("Steals JSON ==> " + tempSeason[0].teams[0].average.steals);
                    // console.log("Blocks JSON ==> " + tempSeason[0].teams[0].average.blocks);
                };
                if (playerData.players[loop].team == "Suns") {
                    if (tempSeason) {
                        teamOne.push(tempSeason[0].teams[0].average.points);
                        console.log("Suns " + playerData.players[loop].player_name + " == " + tempSeason[0].teams[0].average.points);
                    };
                } else {

                    if (tempSeason) {
                        teamTwo.push(Number(tempSeason[0].teams[0].average.points));
                        teamTwoStr += tempSeason[0].teams[0].average.points;
                        console.log("Spurs " + playerData.players[loop].player_name + " == " + tempSeason[0].teams[0].average.points);
                    };

                };

            };
            teamOne.sort(function(a, b) { return b - a });
            teamTwo.sort(function(a, b) { return b - a });
            console.log("Team1 size ==> " + teamOne.length);
            console.log("Team2 size ==> " + teamOne.length);

            for (var count1 = 0; count1 < 8; count1++) {
                teamOneStr += teamOne[count1];
                teamTwoStr += teamTwo[count1];
            };

            console.log("TeamOneStr Suns==>" + teamOneStr);
            console.log("TeamTwoStr Spurs==>" + teamTwoStr);
            var nbaObject = {
                teamTwoStr
            };
            // res.render("index");
        }).then(function(nbaObject) {
                // res.redirect("/");
                res.render("index", nbaObject);
            });
        };
    });

    // app.post("/", function(req, res) {
    // 	console.log("Timinee");
    //     console.log(req.body);
    //     console.log("The BS team is ==> " + req.body.aTeam);
    //     console.log("The BS team is ==> " + req.body.hTeam);
    //     if (req.body.myTeams != "") {
    //         db.players.create({
    //             // burger_name: req.body.yourBurger,
    //             // devoured: false
    //         }).then(function() {
    //             res.redirect("/");
    //         });
    //     };
    // });







}; // the end