{"filter":false,"title":"comments.js","tooltip":"/v7/routes/comments.js","undoManager":{"mark":0,"position":0,"stack":[[{"start":{"row":0,"column":0},"end":{"row":48,"column":24},"action":"insert","lines":["var express = require(\"express\");","var router  = express.Router({mergeParams: true});","var Campground = require(\"../models/campground\");","var Comment = require(\"../models/comment\");","","//Comments New","router.get(\"/new\", isLoggedIn, function(req, res){","    // find campground by id","    console.log(req.params.id);","    Campground.findById(req.params.id, function(err, campground){","        if(err){","            console.log(err);","        } else {","             res.render(\"comments/new\", {campground: campground});","        }","    })","});","","//Comments Create","router.post(\"/\",isLoggedIn,function(req, res){","   //lookup campground using ID","   Campground.findById(req.params.id, function(err, campground){","       if(err){","           console.log(err);","           res.redirect(\"/campgrounds\");","       } else {","        Comment.create(req.body.comment, function(err, comment){","           if(err){","               console.log(err);","           } else {","               campground.comments.push(comment);","               campground.save();","               res.redirect('/campgrounds/' + campground._id);","           }","        });","       }","   });","});","","//middleware","function isLoggedIn(req, res, next){","    if(req.isAuthenticated()){","        return next();","    }","    res.redirect(\"/login\");","}","","","module.exports = router;"],"id":1}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":23,"column":25},"end":{"row":23,"column":25},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":25,"state":"start","mode":"ace/mode/javascript"}},"timestamp":1519080619108,"hash":"c411b3d3b98b215ab954f5629d186b624cf8f4d0"}