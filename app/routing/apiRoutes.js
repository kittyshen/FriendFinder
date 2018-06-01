// A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
// A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.

var path = require('path');
var bodyParser = require('body-parser');

var users = require("../data/friends.js");

module.exports = function(app){
    app.get("/api/friends", function(req, res){
        //test print out all users info
        return res.json(users);
        
    });
      
    app.post("/api/friends", function(req, res) {
        var json = req.body;
        // console.log(json);
        // var person = { name : json.name, photo : json.photo };
        console.log(person);
        users.push(json);
        res.json(json); 

    });
}
