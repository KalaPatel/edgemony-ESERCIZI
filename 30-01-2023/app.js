// Crea un progetto Node.js con un file chiamato app.js
// Crea un server che risponde alla porta 3000
// Crea 3 percorsi: pagina iniziale, studenti, corsi
// Nell’output puoi scrivere quello che vuoi  :mano_ok:
// Prova lo script ed esegui correttamente con il comando nel terminale
// Indica quali sono i percorsi che scriverai nella barra di ricerca del browser per raggiungere le tue pagine

const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/")
    res.end(
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, cumque."
    );
  else if (req.url === "/studenti")
    res.end(
      "Cum aspernatur nam repudiandae illo ullam nobis asperiores molestiae culpa. Vero, accusantium?"
    );
  else if (req.url === "/corsi")
    res.end("Iusto adipisci recusandae ut aut quis consequatur?");
  else {
    res.writeHead(404);
    res.end("Pagina non trovata");
  }
});

server.listen(3000);

// http://localhost:3000/
// http://localhost:3000/studenti
// http://localhost:3000/corsi
