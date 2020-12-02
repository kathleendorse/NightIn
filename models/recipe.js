const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//creating the structure of the schema  
const recipeSchema = new Schema({
  name: { type: String, required: true },
  type: { type: String, required: true },
  wine: { type: String, required: true },
  subwine: { type: String, required: true },
  ingredients: { type: Array, required: true },
  image: { type: String, required: true },
  directions: { type: Array, required: true }
});

//creating a collection called Night that uses the nightSchema
const Recipe = mongoose.model("Recipe", recipeSchema);

module.exports = Recipe;

