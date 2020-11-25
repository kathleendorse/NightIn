const mongoose = require("mongoose");
const Schema = mongoose.Schema;



const wineSchema = new Schema({
  name: { type: String, required: true },
  type: { type: String, required: true },
  vintages: { type: Array, required: true }
});


const Wine = mongoose.model("Wine", wineSchema);


module.exports = Wine;



//module.exports = mongoose.model("Wine", wineSchema);