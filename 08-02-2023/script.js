// Quindi, create un nuovo progetto, preparate la vostra risorsa, attivate postman e buon divertimento.
// Solo un'ultima cosa: se non lo avete già fatto provate in postman la chiamata post sulla route /login in modo che sia pronta per domani per
// essere collegata alla form. Visto che ci siete, aggiungete anche il controllo sullo stato 400.
const express = require("express");
const app = express();
const PORT = 4000;
const articoli = require("./articoli.json");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//GET
app.get("/api/articoli", (req, res) => {
  res.status(200).json({ success: true, data: articoli });
});

//POST
app.post("/api/v1/articoli", (req, res) => {
  const { id, title } = req.body;

  if (!id || !title) {
    return res
      .status(400)
      .json({ success: false, msg: "DATO NECESSARIO NON TROVATO" });
  }

  return res
    .status(201)
    .json({ success: true, data: [...articoli, { id: id, title: title }] });
});

app.post("/login/:userId", (req, res) => {
  const { userId } = req.body;

  const searcheduserId = articoli.find(
    (item) => item.userId === Number(req.params.userId)
  );

  if (!searcheduserId) {
    res
      .status(404)
      .json(`L'utente con id: ${req.params.userId} non è stato trovato`);
  }

  return res.status(200).json(`Benvenuto/a ${req.params.userId}`);
});

//PUT
app.put("/api/v1/articoli/:id", (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  const searchedItemId = articoli.find((item) => item.id === Number(id));
  if (!searchedItemId) {
    return res
      .status(404)
      .json({ success: false, msg: `DATO CON ID: ${id} NON TROVATO` });
  }

  const itemModificated = articoli.map((item) => {
    if (item.id === Number(id)) {
      item.id = Number(id);
      // person.id = req.body.id;
      item.title = title;
    }
    return item;
  });
  res.status(200).json({ success: true, data: itemModificated });
});

//DELETE
app.delete("/api/v1/articoli/:id", (req, res) => {
  //   const { id } = req.params;
  const searchedItemId = articoli.find(
    (item) => item.id === Number(req.params.id)
  );

  if (!searchedItemId) {
    return res.status(404).json({
      success: false,
      msg: `DATO CON ID: ${req.params.id} NON TROVATO`,
    });
  }

  const deletedItem = articoli.filter(
    (item) => item.id !== Number(req.params.id)
  );
  return res.status(200).json({ success: true, data: deletedItem });
});

app.listen(PORT, () => {
  console.log(`Server in ascolto sulla porta: ${PORT} `);
});
