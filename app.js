const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const app = express();

const port = 8080;

app.use(express.static(__dirname));

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.use(cookieParser());

app.get("/", function (req, res) {
  res.redirect("/home");
});

app.get("/home", function (req, res) {
  if (req.cookies.id === undefined) {
    const id = Math.floor(Math.random() * 100000000 + 1);
    res.cookie("id", id);
  }
  var aufrufe = req.cookies.homeaufrufe;
  if (aufrufe === undefined) {
    aufrufe = 1;
  } else {
    aufrufe = Number(aufrufe) + 1;
  }
  res.cookie("homeaufrufe", aufrufe);
  res.sendFile("./home.html", { root: __dirname });
});

app.get("/login", function (req, res) {
  res.cookie("user", "username", { maxAge: 60 * 1000 });
  res.sendFile("./login.html", { root: __dirname });

  var aufrufe = req.cookies.loginaufrufe;
  if (aufrufe === undefined) {
    aufrufe = 1;
  } else {
    aufrufe = Number(aufrufe) + 1;
  }
  res.cookie("loginaufrufe", aufrufe);
});

app.get("/kontakt", function (req, res) {
  res.sendFile("./kontakt.html", { root: __dirname });

  var aufrufe = req.cookies.kontaktaufrufe;
  if (aufrufe === undefined) {
    aufrufe = 1;
  } else {
    aufrufe = Number(aufrufe) + 1;
  }
  res.cookie("kontaktaufrufe", aufrufe);
});

app.get("/aufgabe2", function (req, res) {
  res.sendFile("./aufgabe2.html", { root: __dirname });

  var aufrufe = req.cookies.aufgabe2aufrufe;
  if (aufrufe === undefined) {
    aufrufe = 1;
  } else {
    aufrufe = Number(aufrufe) + 1;
  }
  res.cookie("aufgabe2aufrufe", aufrufe);
});

app.get("/vergleich", function (req, res) {
  res.sendFile("./vergleich.html", { root: __dirname });

  var aufrufe = req.cookies.vergleichaufrufe;
  if (aufrufe === undefined) {
    aufrufe = 1;
  } else {
    aufrufe = Number(aufrufe) + 1;
  }
  res.cookie("vergleichaufrufe", aufrufe);
  var vergleich = Number(aufrufe);
});

app.get("/uebungKontakt", function (req, res) {
  res.sendFile("./uebungKontakt.html", { root: __dirname });

  var aufrufe = req.cookies.vergleich2aufrufe;
  if (aufrufe === undefined) {
    aufrufe = 1;
  } else {
    aufrufe = Number(aufrufe) + 1;
  }
  res.cookie("vergleich2aufrufe", aufrufe);
});

app.listen(port, () => {
  console.log("Example app listening at http://localhost:${port}");
});
