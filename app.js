const express = require("express");
const app = express();

// make all the files in 'public' available
// https://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

// https://expressjs.com/en/starter/basic-routing.html
app.get("/", (request, response) => {
  response.sendFile(__dirname + "/views/index.html");
});

// send the default array of dreams to the webpage
app.get("/api/timestamp/:date?", (req, res) => {
  // express helps us take JS objects and send them as JSON
  const params = req.params;
  const unixRegex = /^[0-9]+$/;
  let date = req.params.date;
  let newDate = new Date();
  if (date !== undefined){
    if (unixRegex.test(date)) date = parseInt(date);
    newDate = new Date(date);
  }  
  let unixTime = newDate.getTime();
  let utcTime = newDate.toUTCString();
  console.log(unixTime);
  if (!isNaN(unixTime)){
    res.json({"unix": unixTime, "utc": utcTime});
  } else {
    res.json({"error": utcTime});
  }
});

 module.exports = app;