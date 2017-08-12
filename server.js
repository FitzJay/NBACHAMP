// server.js 

const express = require("express");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const db = require("./models");
var expressHandlebars = require("express-handlebars");

const port = process.env.PORT || 3000;
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

require("./controllers/nba_champ.js")(app);




app.use(methodOverride("_method"));

app.use(express.static("public"));

app.engine("handlebars", expressHandlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Routes
// =============================================================





db.sequelize.sync().then(function() {
  app.listen(port, function(err) {
    if (err) {
      console.error(err);
    } else {
      console.info("Listening on port %s.", port);
    }
  });
});