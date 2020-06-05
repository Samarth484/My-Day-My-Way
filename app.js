

const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");
const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));

var newItem = [];
var workItems = [];

app.get("/", function(req, res) {

  day = date();



  // res.send("<h1>Kya yaar, no chutti!</h1>");
  res.render("list", {
    ListTitle: day,
    newListItem: newItem
  });

  app.post("/", function(req, res) {
    console.log(req.body);
    let item = req.body.newItem;
    if (req.body.list === "Work") {
      workItems.push(item);
      res.redirect("/work");
    } else {
      newItem.push(item);
      res.redirect("/");
    }

  });
})


app.get("/work", function(req, res) {
  console.log(req.body);
  res.render("list", {
    ListTitle: "Work List",
    newListItem: workItems
  });
});

app.post("/work", function(req, res) {
  let item = req.body.newItem;
  workItems.push(item);
  res.redirect("/work");
})






app.listen(3000, function() {
  console.log("Server is up and running on port: 3000");
});
