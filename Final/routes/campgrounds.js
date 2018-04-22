var express = require("express");
var router  = express.Router();
var Campground = require("../models/campground");
var middleware = require("../middleware");
var request = require("request");
var multer  = require('multer');
var upload = multer({ dest: 'uploads/' });
var cloudinary = require('cloudinary');
var geocoder = require('geocoder');

//INDEX - show all campgrounds
router.get("/", function(req, res){
    // Get all campgrounds from DB
//     Campground.find({}, function(err, allCampgrounds){
//       if(err){
//           console.log(err);
//       } else {
//           request('https://maps.googleapis.com/maps/api/geocode/json?address=sardine%20lake%20ca&key=AIzaSyAXPO_rLW_T9Sau_-dqp94p4mL5AfIAhI4', function (error, response, body) {
//             if (!error && response.statusCode == 200) {
//                 console.log(body); // Show the HTML for the Modulus homepage.
//                 res.render("campgrounds/index",{campgrounds:allCampgrounds});

//             }
// });
//       }
//     });
        Campground.find({}, function(err, allCampgrounds){
               if(err){
                   console.log(err);
               } else {
                        res.render("campgrounds/index",{campgrounds:allCampgrounds});
        
                    }
            });
});
// //CREATE - add new campground to DB
// router.post("/", middleware.isLoggedIn, function(req, res){
//     // get data from form and add to campgrounds array
//     var name = req.body.name;
//     var image = req.body.image;
//     var desc = req.body.description;
//     var author = {
//         id: req.user._id,
//         username: req.user.username
//     }
//     var newCampground = {name: name, image: image, description: desc, author:author}
//     // Create a new campground and save to DB
//     Campground.create(newCampground, function(err, newlyCreated){
//         if(err){
//             console.log(err);
//         } else {
//             //redirect back to campgrounds page
//             console.log(newlyCreated);
//             res.redirect("/campgrounds");
//         }
//     });
// });

//CREATE - add new campground to DB
router.post("/", middleware.isLoggedIn, upload.single('image'), function(req, res){
  //Local Variables 
  // get data from form and add to campgrounds array
  var name = req.body.campground.name;
  var image = req.body.campground.image ? req.body.campground.image : "/images/temp.png";
  var desc = req.body.campground.description;
  var author = {
    id: req.user._id,
    username: req.user.username
  };
  var price = req.body.price;
 
  //Location Code - Geocode Package
  geocoder.geocode(req.body.location, function (err, data, results, status) {
    if (err || data.status === 'ZERO_RESULTS') {
      req.flash('error', 'Invalid address, try typing a new address');
      return res.redirect('back');
    }
    var lat = data.results[0].geometry.location.lat;
    var lng = data.results[0].geometry.location.lng;
    var location = data.results[0].formatted_address;
 
    cloudinary.uploader.upload(req.file.path, function(result) {
 
      // add cloudinary url for the image to the campground object under image property
 
      //image variable needs to be here so the image can be stored and uploaded to cloudinary
      image = result.secure_url;
 
      //Captures All Objects And Stores Them
      var newCampground = {name: name, image: image, description: desc, price: price, author: author, location: location, lat: lat, lng: lng};
 
      // Create a new campground and save to DB by using the create method
      Campground.create(newCampground, function(err, newlyCreated){
        if(err){
          //Logs Error
          req.flash('error', err.message);
          res.render("/", {error: err.message});
          //return res.redirect('back');
 
        } else {
          console.log(newlyCreated);
          //Redirects Back To Featured Campgrounds Page
          res.redirect("/campgrounds");
        }
      });
    });
  });
});

//NEW - show form to create new campground
router.get("/new", middleware.isLoggedIn, function(req, res){
   res.render("campgrounds/new"); 
});

// SHOW - shows more info about one campground
router.get("/:id", function(req, res){
    //find the campground with provided ID
    Campground.findById(req.params.id).populate("comments").exec(function(err, foundCampground){
        if(err){
            console.log(err);
        } else {
            console.log(foundCampground)
            //render show template with that campground
            res.render("campgrounds/show", {campground: foundCampground});
        }
    });
});

router.get("/:id/edit", middleware.checkUserCampground, function(req, res){
    console.log("IN EDIT!");
    //find the campground with provided ID
    Campground.findById(req.params.id, function(err, foundCampground){
        if(err){
            console.log(err);
        } else {
            //render show template with that campground
            res.render("campgrounds/edit", {campground: foundCampground});
        }
    });
});

router.put("/:id", function(req, res){
    var newData = {name: req.body.name, image: req.body.image, description: req.body.desc};
    Campground.findByIdAndUpdate(req.params.id, {$set: newData}, function(err, campground){
        if(err){
            req.flash("error", err.message);
            res.redirect("back");
        } else {
            req.flash("success","Successfully Updated!");
            res.redirect("/campgrounds/" + campground._id);
        }
    });
});


//middleware
// function isLoggedIn(req, res, next){
//     if(req.isAuthenticated()){
//         return next();
//     }
//     req.flash("error", "You must be signed in to do that!");
//     res.redirect("/login");
// }

module.exports = router;

