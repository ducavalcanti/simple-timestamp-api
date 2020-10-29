const express = require("express");
const app = express();

app.get("/api/timestamp/:date?", (req, res) => {
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