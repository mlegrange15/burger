var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");



router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        var allBurgersObject = {
            burgers: data
        };
        // console.log(allBurgersObject);
        res.render("index", allBurgersObject);
    });
});

router.post("/api/burgers", function (req, res) {
    var newBurger = req.body.burger;
    console.log(newBurger);
    burger.insertOne(newBurger, function (result) {
        res.redirect("/");
    });
});

router.put("/api/burgers/devour", function (req, res) {
    console.log(req);
    console.log(res);

    var newBurger = req.body.burger;
    console.log(newBurger);
    burger.insertOne(newBurger, function (result) {
        res.redirect("/");
    });
});





// Export routes for server.js to use.
module.exports = router;