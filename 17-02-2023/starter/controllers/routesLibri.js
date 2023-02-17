const express = require("express");
let routerLibri = express.Router();

const mongoose = require("mongoose");

const Libro = mongoose.model("libroModel");

routerLibri.get("/", (req, res) => {
  res.render("addupbook", {
    viewTitle: "Inserisci un libro",
  });
});

routerLibri.get("/bookList", (req, res) => {
  Libro.find((err, docs) => {
    if (!err) {
      res.render("listBook", {
        booklist: docs,
      });
    } else {
      console.log(`Errore ${err}`);
    }
  });
});

routerLibri.post("/", (req, res) => {
  if (req.body._id == "") insertBookRecord(req, res);
  else updateBookRecord(req, res);
});

function insertBookRecord(req, res) {
  let book = new Libro();
  book.title = req.body.title;
  book.author = req.body.author;
  book.pages = req.body.pages;
  book.price = req.body.price;

  book.save((err, doc) => {
    if (!err) res.redirect("/libro/bookList");
    else console.log("error" + err);
  });
}

function updateBookRecord(req, res) {
  Libro.updateOne(
    { _id: res.body._id },
    req.body,
    { new: true },
    (err, doc) => {
      if (!err) {
        res.redirect("/libro/bookList");
      } else console.log(`Errore nell' inserimento: ${err}`);
    }
  );
}

routerLibri.get("/:id", (req, res) => {
  Libro.findById(req.params.id, (err, doc) => {
    if (!err) {
      res.render("addupbook", {
        viewTitle: "Aggiornamento",
        nota: doc,
      });
    }
  });
});

routerLibri.get("/delete/:id", (req, res) => {
  Libro.findByIdAndRemove(req.params.id, (err, doc) => {
    if (!err) {
      res.redirect("/libro/bookList");
    } else {
      console.log(`Errore ${err}`);
    }
  });
});

module.exports = routerLibri;
