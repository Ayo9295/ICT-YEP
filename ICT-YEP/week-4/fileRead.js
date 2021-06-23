// const fs = require ('fs')
// const content  ='good morning'
// fs.readFile('')
var fs = require("fs");

var data = "For the love of God, Sapa leave me alone.";

fs.writeFile("/Users/backendclass1/Documents/ICT-YEP/week-4/Test/week4.txt", data, (err) => {
  if (err) console.log(err);
  console.log("Successfully Written to File.");
});