
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

var items =["food1","Food2","Food3"];

app.set("view engine", "ejs"); 

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
  
  var today = new Date();

  var options ={
weekday: "long",
month:"long",
day:"numeric" 
  };

var day= today.toLocaleDateString("en-US",options);
  


    res.render("list", {KindOfDay: day, NewListItems: items });
  });

  app.post("/", function(req,res){
  var item = req.body.newItem;                                  // Before setting up body we need to keep in mind that we should have setup body-parser.
  items.push(item);
  res.redirect("/");

});
 


app.listen(3000, function(){ 
  console.log("Server started on port 3000");
});
