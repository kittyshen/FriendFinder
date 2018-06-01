// A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
// A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.

var path = require('path');


module.exports = function(app){
    app.get("/api/friends", function(req, res){
        return res.json(???);
    });
      
      // Get all reserved tables
    app.post("/api/friends", function(req, res) {
        var json = req.body;
        var person = { name : json.name, phonenumber : json.phonenumber, email : json.email, uniqueid : json.uniqueid };
          });
}
