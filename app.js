//

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.set('view engine', 'ejs');

app.listen(3000, function() {
    console.log("Server started on port 3000");
});

let today = new Date();
let currentDay = today.getDay();
let tasks = [];
let lists = [];

app.get("/", function(req,res) {

    let options = {
        weekday: 'long',
        day: 'numeric',
        month: 'long'
    };
    
    let day = today.toLocaleDateString("en-US", options);
    // EJS@@@ render from ejs file to frontpage
    res.render('list', { kindOfDay: day, newItems: tasks });

    // res.render('moreList', { newList: lists });
});
//  Grab user input (post route)
app.post("/", function(req, res) {
    let task = req.body.taskName;
    console.log("Adding item: " + task);

    tasks.push(task);

    res.redirect("/");
});


//
app.post("/newList", function(req, res) {
    let listName = req.body.listName;
    lists.push(listName);
    res.redirect("/");
});












// <% if (kindOfDay === "Saturday" || kindOfDay === "Sunday") { %>
//     <h1 class="weekend">It's a <%= kindOfDay %> List </h1>
// <% } else { %>
//     <h1 style="color: purple" class="weekday">It's a <%= kindOfDay %> List </h1>
// <% } %>