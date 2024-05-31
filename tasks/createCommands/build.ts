const fs = require('fs');
const csv = require("csvtojson")

const csvFilePath = "config/commands.csv";
const jsonFilePath = "static/commands.json";

// Convert a csv file with csvtojson
csv({delimiter:";"})
  .fromFile(csvFilePath)
  .then(function(jsonArrayObj){ //when parse finished, result will be emitted here.
    fs.writeFile(jsonFilePath, JSON.stringify(jsonArrayObj), err => {
        if (err) {
          console.error(err);
        } 
      });
   })