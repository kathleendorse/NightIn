const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const kateSchema = new Schema({
  title: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

const Kate = mongoose.model("Kate", kateSchema);

module.exports = Kate;
