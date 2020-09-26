var express = require("express"), 
app         = express(), 
bodyParser  = require("body-parser"), 
mongoose    = require("mongoose"),
Campground  = require("./models/campground"),
Comment     = require("./models/comment"),
seedDB      = require("./seeds"),
flash       = require("connect-flash"),
passport    = require("passport"),
LocalStrategy = require("passport-local"),
User        = require("./models/user"),
methodOverride = require("method-override");

var campgroundRoutes = require("./routes/campgrounds"),
    commentRoutes    = require("./routes/comments"),
    authRoutes       = require("./routes/index");
//seed the database
//seedDB();

mongoose.connect('mongodb://localhost/yelp_camp_3', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
});
app.use(bodyParser.urlencoded({extended: true}));
const port = 3000;
app.set("view engine", "ejs");
app.use(express.static(__dirname+"/public"));
app.use(flash());

//PASSPORT CONFIGURATION
app.use(require("express-session")({
    secret: "This could be anything",
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(methodOverride("_method"));
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function(req, res, next){
    res.locals.currentUser = req.user;
    res.locals.error     = req.flash("error");
    res.locals.success   = req.flash("success");
    next();
});

app.use("/campgrounds", campgroundRoutes);
app.use("/campgrounds/:id/comments", commentRoutes);
app.use(authRoutes);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
    console.log("YelpCamp Started!");
  });