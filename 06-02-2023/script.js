const express = require("express");
const authorize = require("./auth.js");
const bookJson = require("./bookMocks.json");
const app = express();
const PORT = 4200;

app.use(express.static("/public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.get("/json", (req, res) => {
  res.sendFile(__dirname + "/bookMocks.json");
});

app.get("/api/books/genre", (req, res) => {
  const filterdBook = bookJson.filter((item) => item.genre === "Narrativa");
  return res.json(filterdBook);
});

app.get("/api/books", authorize, (req, res) => {
  const filterdBook = bookJson.map((item) => {
    const { title, author } = item;
    return { title, author };
  });
  return res.json(filterdBook);
});

app.listen(PORT);
