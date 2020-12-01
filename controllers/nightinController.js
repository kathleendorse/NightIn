//bringing in our Collection from the model directory
const db = require("../models");

//Defining methods for querying the NightIn collection

//this gets sent to routes>api>nightin.js 
//which will assign these queries to different routes 

module.exports = {
  recipeFindAll: function (req, res) {
    db.Recipe.find(req.query)
      .sort({ date: -1 })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  //returns results based on search term 
  recipeFind: function(req, res){
    db.Recipe.find({ name: { $regex: new RegExp(req.query.q, 'i')} })
    .then((dbModel)=>{res.json(dbModel)})
    .catch(err => res.status(422).json(err));

  },
  recipeFindById: function (req, res) {
    db.Recipe.findById(req.params.id)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  recipeCreate: function (req, res) {
    db.Recipe.create(req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  recipeUpdate: function (req, res) {
    db.Recipe.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  recipeRemove: function (req, res) {
    db.Recipe.findById({ _id: req.params.id })
      .then((dbModel) => dbModel.remove())
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  // wineFindAll: function(req, res) {
  //   db.Wine
  //     .find(req.query)
  //     .sort({ date: -1 })
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },
  // wineCreate: function (req, res) {
  //   db.Wine.create(req.body)
  //     .then((dbModel) => res.json(dbModel))
  //     .catch((err) => res.status(422).json(err));
  // },
  // wineFindById: function (req, res) {
  //   db.Wine.findById(req.params.id)
  //     .then((dbModel) => res.json(dbModel))
  //     .catch((err) => res.status(422).json(err));
  // },
  // wineUpdate: function (req, res) {
  //   db.Wine.findOneAndUpdate({ _id: req.params.id }, req.body)
  //     .then((dbModel) => res.json(dbModel))
  //     .catch((err) => res.status(422).json(err));
  // },
  // wineRemove: function (req, res) {
  //   db.Wine.findById({ _id: req.params.id })
  //     .then((dbModel) => dbModel.remove())
  //     .then((dbModel) => res.json(dbModel))
  //     .catch((err) => res.status(422).json(err));
  // },

};
