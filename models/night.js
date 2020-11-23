const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const nightSchema = new Schema({
  title: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

const Night = mongoose.model("Night", nightSchema);

module.exports = Night;
