const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const port = 8080;

app.use(express.static(__dirname));

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.use(express.static("src"));

app.get("/", function (req, res) {
  res.sendFile("./index.html", { root: __dirname });
});

app.get("/kontakt", function (req, res) {
  res.sendFile("./kontakt.html", { root: __dirname });
});

app.get("/aufgabe2", function (req, res) {
  res.sendFile("./aufgabe2.html", { root: __dirname });
});

app.get("/vergleich", function (req, res) {
  res.sendFile("./vergleich.html", { root: __dirname });
});

app.get("/uebungKontakt", function (req, res) {
  res.sendFile("./uebungKontakt.html", { root: __dirname });
});

app.listen(port, () => {
  console.log('Example app listening at http://localhost:${port}');
});