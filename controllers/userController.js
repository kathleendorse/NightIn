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
//added
    addRecipe: function (req, res) {
      const {userId, favorite} = req.body;
       db.User.updateOne(
        { _id: mongojs.ObjectId(userId) },
        {$push: {"favs": { mealId: favorite }} },
        {new: true}
      )
      .then(
        db.User.findOne({ _id: mongojs.ObjectId(userId) })
        .then(function(dbModel){
           const userObj = {
             _id: dbModel._id,
             email: dbModel.email,
             favs: dbModel.favs,
           }
           res.json(userObj)
        })        
      )
     .catch((err)=> res.status(422).json(err));

    },
    //------------------------
    // userCreate: function (req, res) {
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