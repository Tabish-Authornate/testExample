var express = require("express");
var app = express();

app.get("/", async function (req, res) {
  res.sendFile(__dirname + "/" + "index.html");
});

app.listen(8080, function () {
  console.log("Example app listening at local host", 8080);
});
