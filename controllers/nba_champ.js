// nba_champ.js

var db = require("../models");

//routes
module.exports = function(app) {

    // temp for initial integration using my burgertoos table
    app.get("/", function(req, res) {
        db.burgertoos.findAll({}).then(function(dbBurger) {
            var burgerObject = {
                burgertoos: dbBurger
            };
            res.render("index");
        });
    }); 


}; // the end