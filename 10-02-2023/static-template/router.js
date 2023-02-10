// const express = require("express");
// const router = express.Router();
// const hbs = require("hbs");

// router.set("view engine", "hbs");
// hbs.registerPartials(__dirname + "/views/partials");
// router.use(express.static("public"));

// const titoli = [
//   "Home Page",
//   "Chi sono",
//   "Web Design",
//   "Formazione",
//   "Contatti",
//   "ERROR :(",
// ];

// router.get("/", (req, res) => {
//   res.render("", titoli);
// });

// module.exports = router;

const express = require("express");
const router = express.Router();

const titoli = [
  "Home Page",
  "Chi sono",
  "Web Design",
  "Formazione",
  "Contatti",
  "ERROR :(",
];

// settiamo lo static
router.use(express.static("./public"));

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

router.get("*", (req, res) => {
  res.status(400).render("error", titoli);
});

module.exports = router;
