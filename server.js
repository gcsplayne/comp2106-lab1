// include express
let express = require("express");

// create a new express app
let app = express();

//Create me function
let me = (req, res) => {
  res.writeHead(200, { "Content-Type": "text/html; charset=UTF-8" });
  res.end(
    "My name's Matt and I'm 30 years old. I love music, sports and making websites."
  );
};
//Create mom function
let mom = (req, res) => {
  res.writeHead(200, { "Content-Type": "text/html; charset=UTF-8" });
  res.end(
    "My mom was a registered nurse and loved her job, and her family very much."
  );
};

//Create dad function
let dad = (req, res) => {
  res.writeHead(200, { "Content-Type": "text/html; charset=UTF-8" });
  res.end(
    "My dad is 71 and is recovering from a triple bypass and aortic valve replacement surgury. He is recovering well and hopes to be able to play golf this summer."
  );
};

//direct requests to our response function
app.use("/me", me);
app.use("/mom", mom);
app.use("/dad", dad);

// start express web server on port 3000
app.listen(3000);

console.log("express running on port 3000");
