// A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
// A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.

var path = require('path');
var bodyParser = require('body-parser');
var fs = require("fs");
var users = require("../data/friends.js");

var user;

// fs.readFile(path.join(__dirname, "../data/friends.txt"),"utf8" , function(err,data){
//     if (err) {
//         return console.log(err);
//     }
//     console.log(data);
//     var user1 = JSON.parse(data);
//     console.log(user1);

// });
fs.readFile(path.join(__dirname, "../data/friends.txt"),"utf8" , function(err,data){
    if (err) {
        return console.log(err);
    }
    // console.log(data);
    user = JSON.parse(data);
    console.log(user);
});

module.exports = function(app){

    app.get("/api/friends", function(req, res){
        //test print out all users info
        return res.json(user);
        
    });
      
    app.post("/api/friends", function(req, res) {

        var json = req.body;
        // console.log(json);
        // var person = { name : json.name, photo : json.photo };

        console.log(user);
        user.push(json);
        //use file system to maintain data user entered
        fs.writeFile(path.join(__dirname, "../data/friends.txt"),JSON.stringify(user) , function(err){
            if (err) {
                return console.log(err);
            }
        });

        fs.readFile(path.join(__dirname, "../data/friends.txt"),"utf8" , function(err,data){
            if (err) {
                return console.log(err);
            }
            user = JSON.parse(data);
            console.log(user);

        });

        console.log(json);
        users.push(json);
        res.json(json); 

    });
}
