import express from "express";

const app = express();

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.listen(10080);
console.log("listening on http://localhost:10080/");
