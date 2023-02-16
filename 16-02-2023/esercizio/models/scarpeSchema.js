const mongoose = require("mongoose");

var scarpeSchema = new mongoose.Schema({
  type: {
    type: String,
  },
  color: {
    type: String,
  },
  size: {
    type: Number,
  },
  quantity: {
    type: Number,
  },
  note: {
    type: String,
  },
});

mongoose.model("shoeModel", scarpeSchema);
