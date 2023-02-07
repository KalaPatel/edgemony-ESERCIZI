const express = require("express");
const app = express();
const userJson = require("./user.json");
const PORT = 3200;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/api/users", (req, res) => {
  res.status(200).json(userJson);
});

app.post("/api/users", (req, res) => {
  const { id, name, username } = req.body;

  if (!id || !name || !username) {
    return res
      .status(400)
      .json({ success: false, msg: "DATO NECESSARIO NON TROVATO" });
  }

  return res
    .status(200)
    .json({ success: true, users: { id: id, name: name, username: username } });
});

app.listen(PORT, () => {
  console.log(`Server in ascolto sulla porta: ${PORT} `);
});
