const authorize = (req, res, next) => {
  const { user } = req.query;

  if (user === "chiara") {
    req.user = {
      nome: "chiara",
    };
  } else {
    res.status(401).send("Nome utente autorizzato");
  }
  next();
};

module.exports = authorize;
