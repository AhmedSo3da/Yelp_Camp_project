var express = require("express");
var router = express.Router();
var Campground = require("../models/campground");
var middleware = require("../middleware");

router.get("/", function(req, res){
    Campground.find({}, function(err, allCampgrounds){
        if(err){
            console.log(err);
        }else{
            res.render("campgrounds/index", {campgrounds:allCampgrounds, currentUser:req.user});
        }
    });
});
router.post("/", middleware.isLoggedIn, function(req, res){
    //get data from form
    var name = req.body.name;
    var image = req.body.image;
    var desc = req.body.description;
    var price = req.body.price;
    var author = {
        id: req.user._id,
        username: req.user.username
    }
    //add to campgrounds array
    var newCampground = {name : name, price:price, image:image, description: desc, author:author};
    Campground.create(newCampground, function(err, newCampground){
        if(err){
            console.log(err);
        }else{
            res.redirect("/campgrounds");
        }
    });
});
router.get("/new", middleware.isLoggedIn, function(req, res){
    res.render("campgrounds/new");
    //
});
//Show more info about the campgrounds
router.get("/:id", function(req, res){
    //find campground with id
    Campground.findById(req.params.id).populate("comments").exec(function(err, foundCampground){
        if (err || !foundCampground){
            req.flash("error", "Campground not found!");
            res.redirect("back");
        }
        else{
            res.render("campgrounds/show", {campground:foundCampground});
        }
    });
});
//EDIT CAMPGROUND ROUTE
router.get("/:id/edit", middleware.checkCampgroundOwnership, function(req, res){
    Campground.findById(req.params.id, function(err, foundCampground){
        res.render("campgrounds/edit", {campground: foundCampground});
    });
});
//UPDATE CAMPGROUND ROUTE
router.put("/:id", middleware.checkCampgroundOwnership, function(req, res){
    //find and update the correct campground
    Campground.findByIdAndUpdate(req.params.id, req.body.campground, function(err, updatedCampground){
        if (err){
            res.redirect("/campgrounds");
        }else{
            res.redirect("/campgrounds/"+req.params.id);
        }
    });
});
//DESTROY ROUTE
router.delete("/:id", middleware.checkCampgroundOwnership, function(req, res){
    Campground.findByIdAndRemove(req.params.id, function(err){
        if (err){
            res.redirect("/campgrounds");
        }else{
            res.redirect("/campgrounds");
        }
    });
});
module.exports = router;