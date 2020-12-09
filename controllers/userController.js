//bringing in our Collection from the model directory
const db = require("../models");
const bcrypt = require("bcryptjs");
const mongojs = require("mongojs");
//const User = require("../models/user");
//const passport = require("../../passport");

//this goes to API (userRegister)
module.exports = {

  //returns the id of the current user when they sign up.
  userCreate: async (req, res) => {
    const { email, password } = req.body;
    if (
      !email ||
      !password ||
      typeof email !== "string" ||
      typeof password !== "string"
    ) {
      res.send("Improper Values");
      return;
    }
    //Validation
    db.User.findOne({ email }, async (err, doc) => {
      if (err) throw err;
      if (doc) res.send("User Already Exists");
      if (!doc) {
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = {
          email,
          password: hashedPassword,
        };
        db.User.create(newUser)
        .then(function(dbModel){
          const userObj = {
            _id: dbModel._id,
            email: dbModel.email,
            favs: dbModel.favs,
          }
          res.json(userObj)
        })        
        .catch((err)=> res.status(422).json(err));
      }
    })
  },
  userFindById: function (req, res){
    db.User.findOne({ _id: mongojs.ObjectId(req.params.userId)})
    .then((dbModel)=>{
      const newFav = dbModel.favs[dbModel.favs.length-1];
      res.json(newFav);
    })
    .catch((err)=> res.status(422).json(err));
  },
  addRecipe: function (req, res) {
    const {userId, favorite} = req.body;
    db.User.updateOne(
      { _id: mongojs.ObjectId(userId) },
      {$push: {"favs": { 
        favRecipe: favorite,
        favWine: {test: "test"}
      }} },
      {new: true})
    .then(function(dbModel){
        res.json(dbModel)
    })
  .catch((err)=> res.status(422).json(err));
  },
  addWine: function (req, res){
    const {userId, favId, favorite} = req.body;
    db.User.updateOne({_id: mongojs.ObjectId(userId), "favs._id": mongojs.ObjectId(favId)},
      {$set: {"favs.$.favWine": favorite}})
    .then(function(dbModel){
        res.json(dbModel)
    })
  .catch((err)=> res.status(422).json(err));
  },

  
};