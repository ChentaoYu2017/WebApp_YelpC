{"filter":false,"title":"app.js","tooltip":"/v5/app.js","undoManager":{"mark":4,"position":4,"stack":[[{"start":{"row":0,"column":0},"end":{"row":107,"column":3},"action":"remove","lines":["var express     = require(\"express\"),","    app         = express(),","    bodyParser  = require(\"body-parser\"),","    mongoose    = require(\"mongoose\"),","    Campground  = require(\"./models/campground\"),","    Comment     = require(\"./models/comment\"),","    seedDB      = require(\"./seeds\")","    ","mongoose.connect(\"mongodb://localhost/yelp_camp_v4\");","app.use(bodyParser.urlencoded({extended: true}));","app.set(\"view engine\", \"ejs\");","seedDB();","","app.get(\"/\", function(req, res){","    res.render(\"landing\");","});","","//INDEX - show all campgrounds","app.get(\"/campgrounds\", function(req, res){","    // Get all campgrounds from DB","    Campground.find({}, function(err, allCampgrounds){","       if(err){","           console.log(err);","       } else {","          res.render(\"campgrounds/index\",{campgrounds:allCampgrounds});","       }","    });","});","","//CREATE - add new campground to DB","app.post(\"/campgrounds\", function(req, res){","    // get data from form and add to campgrounds array","    var name = req.body.name;","    var image = req.body.image;","    var desc = req.body.description;","    var newCampground = {name: name, image: image, description: desc}","    // Create a new campground and save to DB","    Campground.create(newCampground, function(err, newlyCreated){","        if(err){","            console.log(err);","        } else {","            //redirect back to campgrounds page","            res.redirect(\"/campgrounds\");","        }","    });","});","","//NEW - show form to create new campground","app.get(\"/campgrounds/new\", function(req, res){","   res.render(\"campgrounds/new\"); ","});","","// SHOW - shows more info about one campground","app.get(\"/campgrounds/:id\", function(req, res){","    //find the campground with provided ID","    Campground.findById(req.params.id).populate(\"comments\").exec(function(err, foundCampground){","        if(err){","            console.log(err);","        } else {","            console.log(foundCampground)","            //render show template with that campground","            res.render(\"campgrounds/show\", {campground: foundCampground});","        }","    });","});","","","// ====================","// COMMENTS ROUTES","// ====================","","app.get(\"/campgrounds/:id/comments/new\", function(req, res){","    // find campground by id","    Campground.findById(req.params.id, function(err, campground){","        if(err){","            console.log(err);","        } else {","             res.render(\"comments/new\", {campground: campground});","        }","    })","});","","app.post(\"/campgrounds/:id/comments\", function(req, res){","   //lookup campground using ID","   Campground.findById(req.params.id, function(err, campground){","       if(err){","           console.log(err);","           res.redirect(\"/campgrounds\");","       } else {","        Comment.create(req.body.comment, function(err, comment){","           if(err){","               console.log(err);","           } else {","               campground.comments.push(comment);","               campground.save();","               res.redirect('/campgrounds/' + campground._id);","           }","        });","       }","   });","   //create new comment","   //connect new comment to campground","   //redirect campground show page","});","","app.listen(process.env.PORT, process.env.IP, function(){","   console.log(\"The YelpCamp Server Has Started!\");","});"],"id":2},{"start":{"row":0,"column":0},"end":{"row":108,"column":3},"action":"insert","lines":["var express     = require(\"express\"),","    app         = express(),","    bodyParser  = require(\"body-parser\"),","    mongoose    = require(\"mongoose\"),","    Campground  = require(\"./models/campground\"),","    Comment     = require(\"./models/comment\"),","    seedDB      = require(\"./seeds\")","    ","mongoose.connect(\"mongodb://localhost/yelp_camp_v4\");","app.use(bodyParser.urlencoded({extended: true}));","app.set(\"view engine\", \"ejs\");","app.use(express.static(__dirname + \"/public\"));","seedDB();","","app.get(\"/\", function(req, res){","    res.render(\"landing\");","});","","//INDEX - show all campgrounds","app.get(\"/campgrounds\", function(req, res){","    // Get all campgrounds from DB","    Campground.find({}, function(err, allCampgrounds){","       if(err){","           console.log(err);","       } else {","          res.render(\"campgrounds/index\",{campgrounds:allCampgrounds});","       }","    });","});","","//CREATE - add new campground to DB","app.post(\"/campgrounds\", function(req, res){","    // get data from form and add to campgrounds array","    var name = req.body.name;","    var image = req.body.image;","    var desc = req.body.description;","    var newCampground = {name: name, image: image, description: desc}","    // Create a new campground and save to DB","    Campground.create(newCampground, function(err, newlyCreated){","        if(err){","            console.log(err);","        } else {","            //redirect back to campgrounds page","            res.redirect(\"/campgrounds\");","        }","    });","});","","//NEW - show form to create new campground","app.get(\"/campgrounds/new\", function(req, res){","   res.render(\"campgrounds/new\"); ","});","","// SHOW - shows more info about one campground","app.get(\"/campgrounds/:id\", function(req, res){","    //find the campground with provided ID","    Campground.findById(req.params.id).populate(\"comments\").exec(function(err, foundCampground){","        if(err){","            console.log(err);","        } else {","            console.log(foundCampground)","            //render show template with that campground","            res.render(\"campgrounds/show\", {campground: foundCampground});","        }","    });","});","","","// ====================","// COMMENTS ROUTES","// ====================","","app.get(\"/campgrounds/:id/comments/new\", function(req, res){","    // find campground by id","    Campground.findById(req.params.id, function(err, campground){","        if(err){","            console.log(err);","        } else {","             res.render(\"comments/new\", {campground: campground});","        }","    })","});","","app.post(\"/campgrounds/:id/comments\", function(req, res){","   //lookup campground using ID","   Campground.findById(req.params.id, function(err, campground){","       if(err){","           console.log(err);","           res.redirect(\"/campgrounds\");","       } else {","        Comment.create(req.body.comment, function(err, comment){","           if(err){","               console.log(err);","           } else {","               campground.comments.push(comment);","               campground.save();","               res.redirect('/campgrounds/' + campground._id);","           }","        });","       }","   });","   //create new comment","   //connect new comment to campground","   //redirect campground show page","});","","app.listen(process.env.PORT, process.env.IP, function(){","   console.log(\"The YelpCamp Server Has Started!\");","});"]}],[{"start":{"row":8,"column":49},"end":{"row":8,"column":50},"action":"remove","lines":["4"],"id":3}],[{"start":{"row":8,"column":49},"end":{"row":8,"column":50},"action":"insert","lines":["5"],"id":4}],[{"start":{"row":8,"column":49},"end":{"row":8,"column":50},"action":"remove","lines":["5"],"id":5}],[{"start":{"row":8,"column":49},"end":{"row":8,"column":50},"action":"insert","lines":["4"],"id":6}]]},"ace":{"folds":[],"scrolltop":766,"scrollleft":0,"selection":{"start":{"row":28,"column":3},"end":{"row":28,"column":3},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1519065150009,"hash":"58a473f2f7374b05b74c0aa2413ace841a245732"}