const http = require("http");
const fs = require("fs");
const homepage = fs.readFileSync("index.html");
const secondPage = fs.readFileSync("secondPage.html");
const bookMocks = require("./bookMocks.json");

const server = http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    if (req.url === "/") {
      res.end(homepage);
    } else if (req.url === "/chi-sono") {
      res.end(secondPage);
    } else if (req.url === "/libri-api") {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(bookMocks));
    } else {
      res.writeHead(404);
      res.end("Pagina non trovata");
    }
  })
  .listen(5000);
