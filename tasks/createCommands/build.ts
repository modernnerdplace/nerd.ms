const fs = require('fs');
const csv = require("csvtojson")

const csvFilePath = "config/commands.csv";
const jsonFilePath = "static/commands.json";

const slug = (s) =>
  (s || "")
    .toString()
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

// Convert a csv file with csvtojson
csv({delimiter:";"})
  .fromFile(csvFilePath)
  .then(function(jsonArrayObj){ //when parse finished, result will be emitted here.
    const enriched = jsonArrayObj.map((row) => ({
      ...row,
      categoryShortName: slug(row.category),
    }));
    fs.writeFile(jsonFilePath, JSON.stringify(enriched), err => {
        if (err) {
          console.error(err);
        }
      });
   })
