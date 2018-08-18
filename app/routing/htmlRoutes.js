var path = require("path");

module.exports = function(app) {

    // GET route for /survey >> survey.html.
    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname + "/../public/survey.html"));
    });

    // USE route >> home.html for any undefined GET routes.
    app.use(function (req, res) {
        res.sendFile(path.join(__dirname + "/../public/home.html"));
    });

};