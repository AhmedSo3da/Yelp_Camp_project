var mongoose = require("mongoose"),
Campground = require("./models/campground"),
Comment = require("./models/comment");

var data = [{
    name: "Randy",
    image: "https://i.pinimg.com/736x/4d/8e/cc/4d8ecc6967b4a3d475be5c4d881c4d9c.jpg",
    description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        name: "mew!",
        image: "https://i.kym-cdn.com/photos/images/newsfeed/001/741/229/1d0.jpg",
        description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            name: "Maooowwww",
            image: "https://filmdaily.co/wp-content/uploads/2020/05/coughing-cat-meme-lede.jpg",
            description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            },

]
function seedDB(){    
    //remove all campgrounds
    Campground.deleteMany({}, function(err){
        /* if (err){
            console.log(err);
        }
        console.log("removed campgrounds!");
        // add afew campgrounds
        data.forEach(function(seed){
            Campground.create(seed, function(err, campground){
                if (err){
                    console.log(err);
                }else{
                    console.log("added a campground");
                    Comment.create({
                        text: "Stupid caat!",
                        author: "Jerry"
                    }, function(err, comment){
                        if(err){
                            console.log(err);
                        }else{
                            console.log("added a comment");
                            campground.comments.push(comment);
                            campground.save();
                        }
                    });
                }
            });
        });  */
    });
}
module.exports = seedDB ;