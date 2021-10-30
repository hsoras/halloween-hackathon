const csv = require("csvtojson");
const fs = require("fs");

const csvFilePath = "data.csv";
csv()
  .fromFile(csvFilePath)
  .then((jsonObj) => {
    // console.log(jsonObj);
    const jsonString = JSON.stringify(jsonObj);
    fs.writeFileSync("data.json", jsonString);
  });
