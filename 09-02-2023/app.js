const express = require("express");
const app = express();
const port = 4000;

const hbs = require("hbs");

app.set("view engine", "hbs");

hbs.registerPartials(__dirname + "/views/partials");
app.use(express.static("public"));

const myPreferences = {
  pet: "Cocò",
  color: "Blue",
  season: "Autunno",
  titolo: {
    home: "Home del bLOG",
    about: "About Me",
    login: "Login",
  },
};

app.get("/", (req, res) => {
  // con render associo alla attuale rotta (?)
  res.render("home", myPreferences);
});

app.get("/aboutme", (req, res) => {
  res.render("aboutme", myPreferences);
});

app.get("/login", (req, res) => {
  res.render("login", myPreferences);
  // app.post("/login", (req, res) => {
  //   const { name } = req.body;
  //   if (name) {
  //     app.get("/about", (req, res) => {
  //       res.render("about", myPreferences);
  //     });
  //     res.status(200).render("about", myPreferences);
  //   }
  // });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
