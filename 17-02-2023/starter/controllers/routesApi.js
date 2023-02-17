const express = require("express");
let routerApi = express.Router();

const ApiBook = require("../models/libroAPI");

routerApi.get("/", async (req, res) => {
  try {
    const book = await ApiBook.find();
    res.json(book);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

routerApi.post("/", async (req, res) => {
  const book = new ApiBook({
    title: req.body.title,
    author: req.body.author,
    pages: req.body.pages,
    price: req.body.price,
  });

  try {
    const newBooks = await book.save();
    res.status(201).json(newBooks);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = routerApi;
