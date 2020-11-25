const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const nightSchema = new Schema({
  name: { type: String, required: true },
  type: { type: String, required: true },
  wine: { type: String, required: true },
  subwine: { type: String, required: true },
  ingredients: { type: Array, required: true },
  image: { type: String, required: true },
  directions: { type: Array, required: true }
});



const Night = mongoose.model("Night", nightSchema);


module.exports = Night;

