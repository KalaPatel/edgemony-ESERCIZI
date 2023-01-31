const http = require("http");
const os = require("os");
const fs = require("fs");

const productsPage = fs.readFileSync("index.html");
const clientService = fs.readFileSync("servizioClienti.html");

let utente = os.userInfo();
let piattaforma = os.platform();
let data = new Date();
let messaggio = `<!doctype html>
<html>
<head>
</head>
<body>
l'utente <b>${utente.username} </b> 
ha avviato l'app il giorno 
<b>${data}</b> usando la piattaforma: ${piattaforma}
<p><a href= "http://localhost:3001/prodotti">Prodotti</a></p>
<p><a href= "http://localhost:3001/servizioClienti">Servizio Clienti</a></p>
</body>
</html>`;

const server = http.createServer((req, res) => {
  if (req.url === "/") res.end(messaggio);
  else if (req.url === "/prodotti") res.end(productsPage);
  else if (req.url === "/servizioClienti") res.end(clientService);
});
server.listen(3001);
console.log(messaggio);
