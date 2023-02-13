const express = require("express");
const router = express.Router();
const session = require("cookie-session");
const bodyParser = require("body-parser");
router.use(bodyParser.urlencoded({ extended: true }));
router.use(session({ secret: "la mia sessione" }));

const titoli = [
  "Home Page",
  "Chi sono",
  "Web Design",
  "Formazione",
  "Contatti",
  "ERROR :(",
  "Login",
  "Private",
  "Warning",
];

router.use(express.static("./public"));

function checkPage(req, res, next) {
  if (req.session.user) {
    next();
  } else {
    res.redirect("/warning");
  }
}

router.get("/", (req, res) => {
  res.render("", titoli);
});

router.get("/about", (req, res) => {
  res.render("about", titoli);
});

router.get("/about", (req, res) => {
  res.render("about", titoli);
});

router.get("/web-design", (req, res) => {
  res.render("web-design", titoli);
});

router.get("/formazione", (req, res) => {
  res.render("formazione", titoli);
});
router.get("/contatti", (req, res) => {
  res.render("contatti", titoli);
});

router.get("/login", (req, res) => {
  res.render("login", titoli);
});

router.post("/login", (req, res) => {
  // console.log(`${req.body.name} / ${req.body.password}`);
  if (!req.body.name) {
    res.status(400);
    res.render("login", {
      message: "Per favore, aggiungi un nome utente",
    });
  } else if (!req.body.password) {
    res.status(400);
    res.render("login", {
      message: "Per favore, aggiungi una password!",
    });
  } else {
    let name = "Kala";
    let password = "1234";
    let userAuth = { name: name, password: password };

    if (name === req.body.name && password === req.body.password) {
      req.session.user = userAuth;
      res.redirect("/private");
    } else {
      res.redirect("/warning");
    }
  }
});

router.get("/private", checkPage, (req, res) => {
  res.render("private", titoli);
});

router.get("/warning", (req, res) => {
  res.render("warning", titoli);
});

router.get("/logout", (req, res) => {
  req.session = null;
  res.redirect("login");
});

router.get("*", (req, res) => {
  res.status(400).render("error", titoli);
});

module.exports = router;
