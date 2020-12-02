//this file is exporting out all the models in this directory

//these models will be used by:
// script>seedDB.js
// controllers directory (wine & night)
// passport directory (user)


module.exports = {
  Recipe: require("./recipe"),
  User: require("./user"),
  Wine: require("./wine")
};
