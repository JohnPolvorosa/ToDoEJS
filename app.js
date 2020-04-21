//

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.set('view engine', 'ejs');

app.listen(3000, function() {
    console.log("Server started on port 3000");
});

let today = new Date();
let currentDay = today.getDay();
let tasks = [];
let workItems = [];

app.get("/", function(req,res) {



    let options = {
        weekday: 'long',
        day: 'numeric',
        month: 'long'
    };
    
    let day = today.toLocaleDateString("en-US", options);
    // EJS@@@ render from ejs file to frontpage
    res.render("list", {listTitle: day, newListItems: tasks });
});
//  Grab user input (post route)
app.post("/", function(req, res) {
    let task = req.body.newItem;

    if (req.body.list === "Work") {
        workItems.push(task);
        console.log("Adding item: " + task);
        res.redirect("work");
    } else {
        tasks.push(task);
        console.log("Adding item: " + task);
        res.redirect("/");
    }
});

app.get("/work", function(req, res) {
    res.render("list", {listTitle: "Work List", newListItems: workItems });
});

app.post("/work", function(req,res) {
    let item = req.body.newItem;
    workItems.push(item);
    res.redirect("/work");
});

app.get("/about", function(req,res) {
    res.render("about");
});