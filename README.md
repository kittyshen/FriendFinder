# FriendFinder
UC Berkeley coding assignment 11

## Node and Express Servers

### Overview

In this activity, you'll build a compatibility-based "FriendFinder" application -- basically a dating app. This full-stack site will take in results from your users' surveys, then compare their answers with those from other users. The app will then display the name and picture of the user with the best overall match. 

You will use Express to handle routing. Make sure you deploy your app to Heroku so other users can fill it out.


### Before You Begin

* Check out [this demo version of the site](https://friend-finder-fsf.herokuapp.com/). Use this as a model for how we expect your assignment look and operate.

* Create a folder called `FriendFinder`. Inside the folder, organize your directories so it matches the following:

  ```
  FriendFinder
    - .gitignore
    - app
      - data
        - friends.js
      - public
        - home.html
        - survey.html
      - routing
        - apiRoutes.js
        - htmlRoutes.js
    - node_modules
    - package.json
    - server.js
  ```

### Instructions

1. Your survey should have 10 questions of your choosing. Each answer should be on a scale of 1 to 5 based on how much the user agrees or disagrees with a question.

2. Your `server.js` file should require the basic npm packages we've used in class: `express`, `body-parser` and `path`.

3. Your `htmlRoutes.js` file should include two routes:

   * A GET Route to `/survey` which should display the survey page.
   * A default, catch-all route that leads to `home.html` which displays the home page. 

4. Your `apiRoutes.js` file should contain two routes:

   * A GET route with the url `/api/friends`. This will be used to display a JSON of all possible friends.
   * A POST routes `/api/friends`. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic. 

5. You should save your application's data inside of `app/data/friends.js` as an array of objects. Each of these objects should roughly follow the format below.

```json
{
  "name":"Ahmed",
  "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
  "scores":[
      5,
      1,
      4,
      4,
      5,
      1,
      2,
      5,
      4,
      1
    ]
}
```

6. Determine the user's most compatible friend using the following as a guide:

   * Convert each user's results into a simple array of numbers (ex: `[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]`).
   * With that done, compare the difference between current user's scores against those from other users, question by question. Add up the differences to calculate the `totalDifference`.
     * Example: 
       * User 1: `[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]`
       * User 2: `[3, 2, 6, 4, 5, 1, 2, 5, 4, 1]`
       * Total Difference: **2 + 1 + 2 =** **_5_**
   * Remember to use the absolute value of the differences. Put another way: no negative solutions! Your app should calculate both `5-3` and `3-5` as `2`, and so on. 
   * The closest match will be the user with the least amount of difference.

7. Once you've found the current user's most compatible friend, display the result as a modal pop-up.
   * The modal should display both the name and picture of the closest match.


## Technology used
* Node
* EXpress server npm package
* jQuery
* Html
* Css
* Bootstrap framework

## Installation
* Download the zip file and unzip
* in terminal/bash type npm install
* then type node server.js
* open browser on localhost/:8080


## Key learning points
```javascript
var path = require('path');
module.exports = function(app){
    app.get("/", function(req, res){
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
// need to use path.join method if the concatenation cantain ../ 
    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });
}
```  
```javascript
//node file system quick reference
fs.readFile(path.join(__dirname, "../data/friends.txt"),"utf8" , function(err,data){
    if (err) {
        return console.log(err);
    }
    // console.log(data);
    user = JSON.parse(data);
    console.log(user);
});

fs.writeFile(path.join(__dirname, "../data/friends.txt"),JSON.stringify(user) , function(err){
    if (err) {
        return console.log(err);
    }
});

```  
```javascript
//define a fucntion to compare the score property of one obj from the obj array to target obj
function compare(obj,targetObj){
    var totalDiff = 0;  //capture the difference of each score inside the score array
    for(var i = 0; i<10; i++){
        totalDiff += Math.abs(parseInt(obj.score[i]) - parseInt(targetObj.score[i]));
    }
    return totalDiff;
}
```  
```javascript
var path = require('path');
var bodyParser = require('body-parser');
var fs = require("fs");
var users = require("../data/friends.js");
```  
```javascript
function createRadioBtn(num){
    var str = "";
    for(var i = 1 ; i <=5 ; i++){
       str +=  "<div class=\"form-check form-check-inline\">"+
                        "<input class=\"form-check-input\" type=\"radio\" name=\"inlineRadioOptions"+num+" id=\"inlineRadio"+num+"-"+i+"\" value=\""+i+"\">"+
                        "<label class=\"form-check-label\">"+i+"</label>  </div>"
    }
    // radio buttons need to specify certain name field to group set of radio buttons only set one value;
    return str;
}
```  
```javascript
for(var i = 1 ; i <=10 ; i++){
  var radioBtn = $('#score'+i+' input:radio:checked').val();    //readio button value capture quick reference
  if(radioBtn == null){ 
      fillout= false; 
      console.log(fillout); 
      alert("Please check all survey field");
      return;   // using return to break out of the form submit button click listener
  }
  score.push(radioBtn);
}
```  
```javascript
//server.js on the file structure root run this to import logic js files
require('./app/routing/apiRoutes.js')(app); 
require('./app/routing/htmlRoutes.js')(app);
```  

## Link to the site
[Click me](https://polar-thicket-16501.herokuapp.com)

## Author 
[Kitty Shen ](https://github.com/kittyshen)

https://github.com/kittyshen

### [Link to Portfolio Site](https://kittyshen.github.io/Portfolio/)

## License
Standard MIT License
