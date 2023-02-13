const express = require("express");
const app = express();
const port = 4000;
const router = require("./router.js");
const hbs = require("hbs");

app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");

app.use("/", router);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
