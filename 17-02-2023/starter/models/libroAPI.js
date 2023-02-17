const mongoose = require("mongoose");
mongoose.set("strictQuery", true);

const apiBookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  pages: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  dateSub: {
    type: Date,
    required: true,
    default: Date.now(),
  },
});

module.exports = mongoose.model("ApiBook", apiBookSchema);
