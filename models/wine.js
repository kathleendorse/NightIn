const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//creating the structure of the schema  
const wineSchema = new Schema({
  name: { type: String, required: true },
  type: { type: String, required: true },
  vintages: { type: Array, required: true }
});

//creating a collection called Night that uses the nightSchema
const Wine = mongoose.model("Wine", wineSchema);

module.exports = Wine;