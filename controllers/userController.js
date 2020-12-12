
//bringing in our Collection from the model directory
const db = require("../models");
const bcrypt = require("bcryptjs");
const mongojs = require("mongojs");


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
        //this sets the state for the app when a user logs in
        db.User.create(newUser)
        .then(function(dbModel){
          //used to create the userState
          const userObj = {
            _id: dbModel._id,
            email: dbModel.email,
            favs: dbModel.favs,
            shoppingList: dbModel.shoppingList,
            recipeId: "",
            recipeName: "",
            recipeType: "",
            recipeImage: "",
            recipeThumb: "",
            recipeWine: "",
            recipeSubWine: "",
            recipeIngredients: [],
            recipeDirections: [],
            wineId: "",
            wineName: "",
            wineType: "",
            wineBlurb: "",
            wineImage: "",
            wineVintages: []
          }
          res.json(userObj)
        })        
        .catch((err)=> res.status(422).json(err));
      }
    })
  },
  
  //returns the last index of the favs array to add it to the favs array in state
  findLatestFav: function (req, res){
    db.User.findOne({ _id: mongojs.ObjectId(req.params.userId)})
    .then((dbModel)=>{
      const newFav = dbModel.favs[dbModel.favs.length-1];
      res.json(newFav);
    })
    .catch((err)=> res.status(422).json(err));
  },

  findFav: function(req, res){
    db.User.findOne({_id: mongojs.ObjectId(req.userId)})
    .then((dbModel)=>{
      const favs = dbModel.favs;
      let selectedFav = {};
      for (var i=0; i>favs.length; i++){
        let current = favs[i]; 
        if(current.id === favs[i].id){
          selectedFav == current;
        }
      }
      res.json({selectedFav});

    })
    .catch((err)=> res.status(422).json(err));
  },

  //adds favorite object to favs array
  addFav: function (req, res) {
    const {userId, favorite} = req.body;
    db.User.updateOne(
      { _id: mongojs.ObjectId(userId) },
      {$push: {"favs": 
      { 
        id: favorite.id,
        recipeId: favorite.recipeId,
        recipeName: favorite.recipeName,
        recipeType: favorite.recipeType,
        recipeWine: favorite.recipeWine,
        recipeSubwine: favorite.recipeSubwine,
        recipeIngredients: favorite.recipeIngredients,
        recipeImage: favorite.recipeImage,
        recipeThumb: favorite.recipeThumb,
        recipeDirections: favorite.recipeDirections,
        wineId: favorite.wineId,
        wineName: favorite.wineName,
        wineType: favorite.wineType,
        wineBlurb: favorite.wineBlurb,
        wineImage: favorite.wineImage,
        wineVintages: favorite.wineVintages, 
      }
    } },
      {new: true})
    .then(function(dbModel){
        res.json(dbModel)
    })
    .catch((err)=> res.status(422).json(err));
  },

  //adds ingredient to shopping list
  addIng: function(req, res){
    const {userId, ing} = req.body;
    db.User.updateOne(
      { _id: mongojs.ObjectId(userId)},
      {$push: {"shoppingList":
      {
        id: ing.id,
        ing: ing.ing
      }
    }},
    {new: true}
    )
    .then(function(dbModel){
      res.json(dbModel)
    })
    .catch((err)=> res.status(422).json(err));
  },

  //returns the last index of the favs array to add it to the favs array in state
  findLatestIng: function (req, res){
    db.User.findOne({ _id: mongojs.ObjectId(req.params.userId)})
    .then((dbModel)=>{
      const newIng = dbModel.shoppingList[dbModel.shoppingList.length-1];
      res.json(newIng);
    })
    .catch((err)=> res.status(422).json(err));
  },

  //removed ingredient from shopping list
  removeIng: function(req, res){
    const {userId, ing} = req.body;
    db.User.updateOne(
      { _id: mongojs.ObjectId(userId)},
      { $pull: {"shoppingList" : {"id": ing.id}}}
    )
    .then((dbModel)=>res.json(dbModel))
    .catch((err)=> res.status(422).json(err));
  },

    //removed ingredient from shopping list
    removeFav: function(req, res){
      const {userId, favId} = req.body;
      db.User.updateOne(
        { _id: mongojs.ObjectId(userId)},
        { $pull: {"favs" : {"id": favId}}}
      )
      .then((dbModel)=>res.json(dbModel))
      .catch((err)=> res.status(422).json(err));
    },


  
};