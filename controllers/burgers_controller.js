var express = require('express');

var router = express.Router();

var burger = require("../models/burgers.js");

router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/", function (req, res) {
    burger.insertOne(req.body.burger_name, function () {
        res.redirect("/");
    });
});


router.put("/burgers/:id", function (req, res, next) {
    burgers.update(
      {id: req.req.params.id},
      {returning: true, where: {id: req.params.id} }
    )
    .then(function([ rowsUpdate, [updatedBook] ]) {
      res.json(updatedBook)
    })
    .catch(next)
   })







// router.put("/api/burgers/:id", function (req, res) {
//     var id = req.params.id;

//     console.log("id", id);

//     burger.updateOne(id, function () {
//         res.redirect("/");
//     });
// });

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
  