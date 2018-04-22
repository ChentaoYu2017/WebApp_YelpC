{"filter":false,"title":"comments.js","tooltip":"/v8/routes/comments.js","undoManager":{"mark":91,"position":91,"stack":[[{"start":{"row":0,"column":0},"end":{"row":48,"column":24},"action":"remove","lines":["var express = require(\"express\");","var router  = express.Router({mergeParams: true});","var Campground = require(\"../models/campground\");","var Comment = require(\"../models/comment\");","","//Comments New","router.get(\"/new\", isLoggedIn, function(req, res){","    // find campground by id","    console.log(req.params.id);","    Campground.findById(req.params.id, function(err, campground){","        if(err){","            console.log(err);","        } else {","             res.render(\"comments/new\", {campground: campground});","        }","    })","});","","//Comments Create","router.post(\"/\",isLoggedIn,function(req, res){","   //lookup campground using ID","   Campground.findById(req.params.id, function(err, campground){","       if(err){","           console.log(err);","           res.redirect(\"/campgrounds\");","       } else {","        Comment.create(req.body.comment, function(err, comment){","           if(err){","               console.log(err);","           } else {","               campground.comments.push(comment);","               campground.save();","               res.redirect('/campgrounds/' + campground._id);","           }","        });","       }","   });","});","","//middleware","function isLoggedIn(req, res, next){","    if(req.isAuthenticated()){","        return next();","    }","    res.redirect(\"/login\");","}","","","module.exports = router;"],"id":3},{"start":{"row":0,"column":0},"end":{"row":48,"column":24},"action":"insert","lines":["var express = require(\"express\");","var router  = express.Router({mergeParams: true});","var Campground = require(\"../models/campground\");","var Comment = require(\"../models/comment\");","","//Comments New","router.get(\"/new\", isLoggedIn, function(req, res){","    // find campground by id","    console.log(req.params.id);","    Campground.findById(req.params.id, function(err, campground){","        if(err){","            console.log(err);","        } else {","             res.render(\"comments/new\", {campground: campground});","        }","    })","});","","//Comments Create","router.post(\"/\",isLoggedIn,function(req, res){","   //lookup campground using ID","   Campground.findById(req.params.id, function(err, campground){","       if(err){","           console.log(err);","           res.redirect(\"/campgrounds\");","       } else {","        Comment.create(req.body.comment, function(err, comment){","           if(err){","               console.log(err);","           } else {","               campground.comments.push(comment);","               campground.save();","               res.redirect('/campgrounds/' + campground._id);","           }","        });","       }","   });","});","","//middleware","function isLoggedIn(req, res, next){","    if(req.isAuthenticated()){","        return next();","    }","    res.redirect(\"/login\");","}","","","module.exports = router;"]}],[{"start":{"row":0,"column":0},"end":{"row":48,"column":24},"action":"remove","lines":["var express = require(\"express\");","var router  = express.Router({mergeParams: true});","var Campground = require(\"../models/campground\");","var Comment = require(\"../models/comment\");","","//Comments New","router.get(\"/new\", isLoggedIn, function(req, res){","    // find campground by id","    console.log(req.params.id);","    Campground.findById(req.params.id, function(err, campground){","        if(err){","            console.log(err);","        } else {","             res.render(\"comments/new\", {campground: campground});","        }","    })","});","","//Comments Create","router.post(\"/\",isLoggedIn,function(req, res){","   //lookup campground using ID","   Campground.findById(req.params.id, function(err, campground){","       if(err){","           console.log(err);","           res.redirect(\"/campgrounds\");","       } else {","        Comment.create(req.body.comment, function(err, comment){","           if(err){","               console.log(err);","           } else {","               campground.comments.push(comment);","               campground.save();","               res.redirect('/campgrounds/' + campground._id);","           }","        });","       }","   });","});","","//middleware","function isLoggedIn(req, res, next){","    if(req.isAuthenticated()){","        return next();","    }","    res.redirect(\"/login\");","}","","","module.exports = router;"],"id":4},{"start":{"row":0,"column":0},"end":{"row":48,"column":24},"action":"insert","lines":["var express = require(\"express\");","var router  = express.Router({mergeParams: true});","var Campground = require(\"../models/campground\");","var Comment = require(\"../models/comment\");","","//Comments New","router.get(\"/new\", isLoggedIn, function(req, res){","    // find campground by id","    console.log(req.params.id);","    Campground.findById(req.params.id, function(err, campground){","        if(err){","            console.log(err);","        } else {","             res.render(\"comments/new\", {campground: campground});","        }","    })","});","","//Comments Create","router.post(\"/\",isLoggedIn,function(req, res){","   //lookup campground using ID","   Campground.findById(req.params.id, function(err, campground){","       if(err){","           console.log(err);","           res.redirect(\"/campgrounds\");","       } else {","        Comment.create(req.body.comment, function(err, comment){","           if(err){","               console.log(err);","           } else {","               campground.comments.push(comment);","               campground.save();","               res.redirect('/campgrounds/' + campground._id);","           }","        });","       }","   });","});","","//middleware","function isLoggedIn(req, res, next){","    if(req.isAuthenticated()){","        return next();","    }","    res.redirect(\"/login\");","}","","","module.exports = router;"]}],[{"start":{"row":29,"column":19},"end":{"row":30,"column":0},"action":"insert","lines":["",""],"id":5},{"start":{"row":30,"column":0},"end":{"row":30,"column":15},"action":"insert","lines":["               "]}],[{"start":{"row":30,"column":15},"end":{"row":30,"column":16},"action":"insert","lines":["j"],"id":6}],[{"start":{"row":30,"column":15},"end":{"row":30,"column":16},"action":"remove","lines":["j"],"id":7}],[{"start":{"row":30,"column":15},"end":{"row":30,"column":16},"action":"insert","lines":["c"],"id":8}],[{"start":{"row":30,"column":16},"end":{"row":30,"column":17},"action":"insert","lines":["o"],"id":9}],[{"start":{"row":30,"column":17},"end":{"row":30,"column":18},"action":"insert","lines":["m"],"id":10}],[{"start":{"row":30,"column":18},"end":{"row":30,"column":19},"action":"insert","lines":["m"],"id":11}],[{"start":{"row":30,"column":19},"end":{"row":30,"column":20},"action":"insert","lines":["e"],"id":12}],[{"start":{"row":30,"column":15},"end":{"row":30,"column":20},"action":"remove","lines":["comme"],"id":13},{"start":{"row":30,"column":15},"end":{"row":30,"column":22},"action":"insert","lines":["comment"]}],[{"start":{"row":30,"column":22},"end":{"row":30,"column":23},"action":"insert","lines":["."],"id":14}],[{"start":{"row":30,"column":23},"end":{"row":30,"column":24},"action":"insert","lines":["a"],"id":15}],[{"start":{"row":30,"column":24},"end":{"row":30,"column":25},"action":"insert","lines":["u"],"id":16}],[{"start":{"row":30,"column":25},"end":{"row":30,"column":26},"action":"insert","lines":["t"],"id":17}],[{"start":{"row":30,"column":26},"end":{"row":30,"column":27},"action":"insert","lines":["h"],"id":18}],[{"start":{"row":30,"column":27},"end":{"row":30,"column":28},"action":"insert","lines":["o"],"id":19}],[{"start":{"row":30,"column":28},"end":{"row":30,"column":29},"action":"insert","lines":["r"],"id":20}],[{"start":{"row":30,"column":29},"end":{"row":30,"column":30},"action":"insert","lines":["."],"id":21}],[{"start":{"row":30,"column":30},"end":{"row":30,"column":31},"action":"insert","lines":["i"],"id":22}],[{"start":{"row":30,"column":31},"end":{"row":30,"column":32},"action":"insert","lines":["d"],"id":23}],[{"start":{"row":30,"column":32},"end":{"row":30,"column":33},"action":"insert","lines":[" "],"id":24}],[{"start":{"row":30,"column":33},"end":{"row":30,"column":34},"action":"insert","lines":["="],"id":25}],[{"start":{"row":30,"column":34},"end":{"row":30,"column":35},"action":"insert","lines":[" "],"id":26}],[{"start":{"row":30,"column":35},"end":{"row":30,"column":36},"action":"insert","lines":["r"],"id":27}],[{"start":{"row":30,"column":36},"end":{"row":30,"column":37},"action":"insert","lines":["e"],"id":28}],[{"start":{"row":30,"column":37},"end":{"row":30,"column":38},"action":"insert","lines":["q"],"id":29}],[{"start":{"row":30,"column":38},"end":{"row":30,"column":39},"action":"insert","lines":["."],"id":30}],[{"start":{"row":30,"column":39},"end":{"row":30,"column":40},"action":"insert","lines":["u"],"id":31}],[{"start":{"row":30,"column":40},"end":{"row":30,"column":41},"action":"insert","lines":["s"],"id":32}],[{"start":{"row":30,"column":41},"end":{"row":30,"column":42},"action":"insert","lines":["e"],"id":33}],[{"start":{"row":30,"column":42},"end":{"row":30,"column":43},"action":"insert","lines":["r"],"id":34}],[{"start":{"row":30,"column":43},"end":{"row":30,"column":44},"action":"insert","lines":["_"],"id":35}],[{"start":{"row":30,"column":44},"end":{"row":30,"column":45},"action":"insert","lines":["i"],"id":36}],[{"start":{"row":30,"column":45},"end":{"row":30,"column":46},"action":"insert","lines":["d"],"id":37}],[{"start":{"row":30,"column":46},"end":{"row":30,"column":47},"action":"insert","lines":[";"],"id":38}],[{"start":{"row":30,"column":47},"end":{"row":31,"column":0},"action":"insert","lines":["",""],"id":39},{"start":{"row":31,"column":0},"end":{"row":31,"column":15},"action":"insert","lines":["               "]}],[{"start":{"row":31,"column":15},"end":{"row":31,"column":47},"action":"insert","lines":["comment.author.id = req.user_id;"],"id":40}],[{"start":{"row":31,"column":31},"end":{"row":31,"column":32},"action":"remove","lines":["d"],"id":41}],[{"start":{"row":31,"column":30},"end":{"row":31,"column":31},"action":"remove","lines":["i"],"id":42}],[{"start":{"row":31,"column":30},"end":{"row":31,"column":31},"action":"insert","lines":["u"],"id":43}],[{"start":{"row":31,"column":31},"end":{"row":31,"column":32},"action":"insert","lines":["s"],"id":44}],[{"start":{"row":31,"column":32},"end":{"row":31,"column":33},"action":"insert","lines":["e"],"id":45}],[{"start":{"row":31,"column":33},"end":{"row":31,"column":34},"action":"insert","lines":["r"],"id":46}],[{"start":{"row":31,"column":34},"end":{"row":31,"column":35},"action":"insert","lines":["n"],"id":47}],[{"start":{"row":31,"column":35},"end":{"row":31,"column":36},"action":"insert","lines":["a"],"id":48}],[{"start":{"row":31,"column":36},"end":{"row":31,"column":37},"action":"insert","lines":["m"],"id":49}],[{"start":{"row":31,"column":37},"end":{"row":31,"column":38},"action":"insert","lines":["e"],"id":50}],[{"start":{"row":31,"column":51},"end":{"row":31,"column":52},"action":"remove","lines":["d"],"id":51}],[{"start":{"row":31,"column":50},"end":{"row":31,"column":51},"action":"remove","lines":["i"],"id":52}],[{"start":{"row":31,"column":49},"end":{"row":31,"column":50},"action":"remove","lines":["_"],"id":53}],[{"start":{"row":31,"column":49},"end":{"row":31,"column":50},"action":"insert","lines":[","],"id":54}],[{"start":{"row":31,"column":49},"end":{"row":31,"column":50},"action":"remove","lines":[","],"id":55}],[{"start":{"row":31,"column":49},"end":{"row":31,"column":50},"action":"insert","lines":["."],"id":56}],[{"start":{"row":31,"column":50},"end":{"row":31,"column":51},"action":"insert","lines":["u"],"id":57}],[{"start":{"row":31,"column":51},"end":{"row":31,"column":52},"action":"insert","lines":["s"],"id":58}],[{"start":{"row":31,"column":52},"end":{"row":31,"column":53},"action":"insert","lines":["e"],"id":59}],[{"start":{"row":31,"column":53},"end":{"row":31,"column":54},"action":"insert","lines":["r"],"id":60}],[{"start":{"row":31,"column":54},"end":{"row":31,"column":55},"action":"insert","lines":["n"],"id":61}],[{"start":{"row":31,"column":55},"end":{"row":31,"column":56},"action":"insert","lines":["a"],"id":62}],[{"start":{"row":31,"column":56},"end":{"row":31,"column":57},"action":"insert","lines":["m"],"id":63}],[{"start":{"row":31,"column":57},"end":{"row":31,"column":58},"action":"insert","lines":["e"],"id":64}],[{"start":{"row":31,"column":59},"end":{"row":32,"column":0},"action":"insert","lines":["",""],"id":65},{"start":{"row":32,"column":0},"end":{"row":32,"column":15},"action":"insert","lines":["               "]}],[{"start":{"row":32,"column":15},"end":{"row":32,"column":16},"action":"insert","lines":["/"],"id":66}],[{"start":{"row":32,"column":16},"end":{"row":32,"column":17},"action":"insert","lines":["/"],"id":67}],[{"start":{"row":32,"column":17},"end":{"row":32,"column":18},"action":"insert","lines":["s"],"id":68}],[{"start":{"row":32,"column":18},"end":{"row":32,"column":19},"action":"insert","lines":["a"],"id":69}],[{"start":{"row":32,"column":19},"end":{"row":32,"column":20},"action":"insert","lines":["v"],"id":70}],[{"start":{"row":32,"column":20},"end":{"row":32,"column":21},"action":"insert","lines":["e"],"id":71}],[{"start":{"row":32,"column":21},"end":{"row":32,"column":22},"action":"insert","lines":[" "],"id":72}],[{"start":{"row":32,"column":22},"end":{"row":32,"column":23},"action":"insert","lines":["c"],"id":73}],[{"start":{"row":32,"column":23},"end":{"row":32,"column":24},"action":"insert","lines":["o"],"id":74}],[{"start":{"row":32,"column":24},"end":{"row":32,"column":25},"action":"insert","lines":["m"],"id":75}],[{"start":{"row":32,"column":25},"end":{"row":32,"column":26},"action":"insert","lines":["m"],"id":76}],[{"start":{"row":32,"column":26},"end":{"row":32,"column":27},"action":"insert","lines":["e"],"id":77}],[{"start":{"row":32,"column":27},"end":{"row":32,"column":28},"action":"insert","lines":["n"],"id":78}],[{"start":{"row":32,"column":28},"end":{"row":32,"column":29},"action":"insert","lines":["t"],"id":79}],[{"start":{"row":32,"column":29},"end":{"row":33,"column":0},"action":"insert","lines":["",""],"id":80},{"start":{"row":33,"column":0},"end":{"row":33,"column":15},"action":"insert","lines":["               "]}],[{"start":{"row":33,"column":15},"end":{"row":33,"column":16},"action":"insert","lines":["c"],"id":81}],[{"start":{"row":33,"column":16},"end":{"row":33,"column":17},"action":"insert","lines":["o"],"id":82}],[{"start":{"row":33,"column":17},"end":{"row":33,"column":18},"action":"insert","lines":["m"],"id":83}],[{"start":{"row":33,"column":18},"end":{"row":33,"column":19},"action":"insert","lines":["m"],"id":84}],[{"start":{"row":33,"column":19},"end":{"row":33,"column":20},"action":"insert","lines":["e"],"id":85}],[{"start":{"row":33,"column":20},"end":{"row":33,"column":21},"action":"insert","lines":["n"],"id":86}],[{"start":{"row":33,"column":21},"end":{"row":33,"column":22},"action":"insert","lines":["t"],"id":87}],[{"start":{"row":33,"column":22},"end":{"row":33,"column":23},"action":"insert","lines":["."],"id":88}],[{"start":{"row":33,"column":23},"end":{"row":33,"column":24},"action":"insert","lines":["s"],"id":89}],[{"start":{"row":33,"column":24},"end":{"row":33,"column":25},"action":"insert","lines":["a"],"id":90}],[{"start":{"row":33,"column":25},"end":{"row":33,"column":26},"action":"insert","lines":["v"],"id":91}],[{"start":{"row":33,"column":26},"end":{"row":33,"column":27},"action":"insert","lines":["e"],"id":92}],[{"start":{"row":33,"column":27},"end":{"row":33,"column":29},"action":"insert","lines":["()"],"id":93}],[{"start":{"row":33,"column":29},"end":{"row":33,"column":30},"action":"insert","lines":[";"],"id":94}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":25,"column":15},"end":{"row":25,"column":15},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1519083065646,"hash":"b0596f932e326dfaf04d63935757a675b27b25e9"}