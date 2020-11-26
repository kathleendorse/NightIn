//bringing in our Collection from the model directory
const db = require("../models");

//Defining methods for querying the NightIn collection

//this gets sent to routes>api>nightin.js 
//which will assign these queries to different routes 

module.exports = {
  findAll: function (req, res) {
    db.Night.find(req.query)
      .sort({ date: -1 })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  //returns results based on search term 
  find: function(req, res){
    db.Night.find({ name: { $regex: new RegExp(req.query.q, 'i')} })
    .then((dbModel)=>{res.json(dbModel)})
    .catch(err => res.status(422).json(err));

  },
  findById: function (req, res) {
    db.Night.findById(req.params.id)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  create: function (req, res) {
    db.Night.create(req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  update: function (req, res) {
    db.Night.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.Night.findById({ _id: req.params.id })
      .then((dbModel) => dbModel.remove())
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },

};
