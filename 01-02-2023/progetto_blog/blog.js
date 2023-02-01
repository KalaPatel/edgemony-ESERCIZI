const http = require("http");
const PORT = 3001;
const itemUrl = "/articoli";
const commentsUrl = "/commenti";
const usersUrl = "/utenti";

let server = http
  .createServer(function (req, res) {
    console.log(`Server connesso alla porta ${PORT}`);
    res.writeHead(200, { "Content-Type": "text/plain" });
    if (req.url === itemUrl) {
      res.write(
        `<!DOCTYPE html>
       <html>
          <head>
            <title>Articoli</title>
          </head>
          <body>
            <h1>Pagina articoli</h1>
          </body>
       </html>`
      );
    } else if (req.url === commentsUrl) {
      res.write(
        `<!DOCTYPE html>
       <html>
          <head>
            <title>Commenti</title>
          </head>
          <body>
            <h1>Pagina commenti</h1>
          </body>
       </html>`
      );
    } else if (req.url === usersUrl) {
      res.write(
        `<!DOCTYPE html>
       <html>
          <head>
            <title>Utenti</title>
          </head>
          <body>
            <h1>Pagina utenti</h1>
          </body>
       </html>`
      );
    } else {
      res.writeHead(404);
      res.end("Pagina non trovata");
    }
    res.end();
  })
  .listen(PORT);
