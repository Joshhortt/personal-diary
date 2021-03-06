//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
// 18. add lodash
const _ = require("lodash");
// 18. END
const homeStartingContent = "Lacus vel facilisis volutpat est velit egestas dui id ornare. Semper auctor neque vitae tempus quam. Sit amet cursus sit amet dictum sit amet justo. Viverra tellus in hac habitasse. Imperdiet proin fermentum leo vel orci porta. Donec ultrices tincidunt arcu non sodales neque sodales ut. Mattis molestie a iaculis at erat pellentesque adipiscing. Magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Adipiscing elit ut aliquam purus sit amet luctus venenatis lectus. Ultrices vitae auctor eu augue ut lectus arcu bibendum at. Odio euismod lacinia at quis risus sed vulputate odio ut. Cursus mattis molestie a iaculis at erat pellentesque adipiscing.";
const aboutContent = "Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Non diam phasellus vestibulum lorem sed. Platea dictumst quisque sagittis purus sit. Egestas sed sed risus pretium quam vulputate dignissim suspendisse. Mauris in aliquam sem fringilla. Semper risus in hendrerit gravida rutrum quisque non tellus orci. Amet massa vitae tortor condimentum lacinia quis vel eros. Enim ut tellus elementum sagittis vitae. Mauris ultrices eros in cursus turpis massa tincidunt dui.";
const contactContent = "Scelerisque eleifend donec pretium vulputate sapien. Rhoncus urna neque viverra justo nec ultrices. Arcu dui vivamus arcu felis bibendum. Consectetur adipiscing elit duis tristique. Risus viverra adipiscing at in tellus integer feugiat. Sapien nec sagittis aliquam malesuada bibendum arcu vitae. Consequat interdum varius sit amet mattis. Iaculis nunc sed augue lacus. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Pulvinar elementum integer enim neque. Ultrices gravida dictum fusce ut placerat orci nulla. Mauris in aliquam sem fringilla ut morbi tincidunt. Tortor posuere ac ut consequat semper viverra nam libero.";

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

// 11. add global variable with empty array + redirect to root route
let posts = [];
// 11. END

// 1. Render home.ejs
// app.get("/", function(_req, res) {
// res.render("home,")
// });
// 1. END

//###############################################################

// 2. Passing p text using key value pair
// app.get("/", function(_req, res) {
//   res.render("home, {key: value}")
//   });

  // app.get("/", function(_req, res) {
  //   res.render("home", {startingContent: homeStartingContent});
  //   });

// 2. END

//###############################################################

// 12.  add another key value pair + passing in the posts array

  app.get("/", function(_req, res) {
    res.render("home", {
      startingContent: homeStartingContent,
      posts: posts
      });
    });

// 12. END

//###############################################################

// 5. render about and contact pages using key value pair

app.get("/about", function(_req, res){
  res.render("about", {aboutContent: aboutContent});
});
 
app.get("/contact", function(_req, res){
  res.render("contact", {contactContent: contactContent});
});

// 5. END

//###############################################################

// 7. render compose page using key value pair 

app.get("/compose", function(_req, res) {
  res.render("compose");
});

// 7. END

//###############################################################

// // 8. Add post method

// app.post("/compose", function(_req, res) {
//   console.log(_req.body.postTitle);
// });

// // 8. END

//###############################################################

// // 10. Create object

// app.post("/compose", function(_req, res){
//   const post = {
//     title: _req.body.postTitle,
//     content: _req.body.postBody
//   };

// });

// // 10. END

//###############################################################

// 11. add global variable with empty array + redirect to root route

app.post("/compose", function(_req, res){
  const post = {
    title: _req.body.postTitle,
    content: _req.body.postBody
  };
  // adding posts array + push method
  posts.push(post);
  res.redirect("/");

});

// 11. END

//###############################################################

// 16. Add express routing parameters

// app.get("/posts/:postName", function(_req, res){
//   console.log(_req.params.postName);
// });

// 16. END

//###############################################################

// 17. add post title match found for testing loop throug posts array

// app.get("/posts/:postName", function(_req, res){
//   const requestedTitle = _req.params.postName;

//   posts.forEach(function(post){
//     const storedTitle = post.title;
//     if (storedTitle === requestedTitle) {
//      console.log("Match found!");
      
//     }

//   });

// });

// 17. END

//###############################################################

// 18. format storedTitle, add lodash. Test with if else statement

// app.get("/posts/:postName", function(_req, res){
//   const requestedTitle = _.lowerCase(_req.params.postName);

//   posts.forEach(function(post){
//     const storedTitle = _.lowerCase(post.title);
//     if (storedTitle === requestedTitle) {
//      console.log("Match found!");
      
//     } else {
//       console.log("Match not found!");
//     }

//   });

// });

// 18. END

//###############################################################

// 19. add tags to post.ejs and pass variables through post.ejs

// app.get("/posts/:postName", function(_req, res){
//   const requestedTitle = _.lowerCase(_req.params.postName);

//   posts.forEach(function(post){
//     const storedTitle = _.lowerCase(post.title);
//     if (storedTitle === requestedTitle) {
//       res.render("post", {
//         title: post.title,
//         content: post.content
//       });
//   }

//   });
// });

// 19. END

//###############################################################

// 20. 

app.get("/posts/:postName", function(_req, res){
  const requestedTitle = _.lowerCase(_req.params.postName);

  posts.forEach(function(post){
    const storedTitle = _.lowerCase(post.title);
    if (storedTitle === requestedTitle) {
      res.render("post", {
        title: post.title,
        content: post.content
      });
  }

  });
});

// 20. END

//###############################################################


app.listen(3000, function() {
  console.log("Server started on port 3000");
});
