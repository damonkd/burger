var express = require('express');
var router = express.Router();
var burger = require("../models/burgers.js");


//gets list of all burgers, burgers are sepereate in handel bars main
router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});


//adds a burger
router.post("/", function (req, res) {
    burger.insertOne(req.body.burger_name, function () {
        res.redirect("/");
    });
});

// in order for this to work a method overide is required
router.put("/:id", function (req, res) {
    var id = req.params.id;

  

   burger.updateOne(id, function () {
        res.redirect("/");
  });
 });

module.exports = router;
//router.put("/api/cats/:id", function(req, res) {
   // var condition = "id = " + req.params.id;
  
    //console.log("condition", condition);
  
    //cat.update({
      //sleepy: req.body.sleepy
    //}, condition, function(result) {
      //if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
       // return res.status(404).end();
     // } else {
       // res.status(200).end();
     // }
  //  });
 // });
  