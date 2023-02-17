require("dotenv").config();
const express = require("express");
let app = express();
const mongoose = require("mongoose");

const routerApi = require("./controllers/routesApi");

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });

const db = mongoose.connection;

db.on("error", (error) => console.error(error));

db.once("open", () => console.log("Connesso al db"));

app.use(express.json());

app.use("/api/v1/books", routerApi);

app.listen(5000, () => console.log("Server attivo"));
