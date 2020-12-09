const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const user = new Schema({
  email: {
    type: String,
    validate: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 4,
    maxlength: 64,
  },
  createDate: {
    type: Date,
    required: true,
    default: Date.now,
  },

  //***WORKS COMMENTED OUT FOR TESTING */
  // favs: [
  //   {
  //     mealId: "",
  //     wineId: "",
  //   },
  // ],

  //----------------TESTING
    favs: [
      {
        favRecipe: {},
        favWine: {}
      },
    ],
  // favs: [
  //   {
  //     favRecipe: {
  //       _id: Schema.Types.ObjectId,
  //       name: "",
  //       type: "",
  //       wine: "",
  //       subwine: "",
  //       subwine: "",
  //       ingredients: [],
  //       image: "",
  //       directions: []
  //       },
  //     favWine: {
  //       _id: Schema.Types.ObjectId,
  //       name: "",
  //       type: "",
  //       blurb: "",
  //       image: "",
  //       vintages: []
  //     },

  //   }
  // ]

  // favs: [
  //   {
  //       recipeName: "",
  //       recipeType: "",
  //       recipeWine: "",
  //       recipeSubwine: "",
  //       recipeIngredients: [],
  //       recipeImage: "",
  //       recipeDirections: [],
  //       wineName: "",
  //       wineType: "",
  //       wineBlurb: "",
  //       wineImage: "",
  //       wineVintages: []
  //   },
  // ]
//------------------------------
});




module.exports = mongoose.model("User", user);


  // favs: [
  //   // {
  //   //   mealId: {
  //   //     type: Schema.Types.ObjectId,
  //   //     ref: "night",
  //   //   },
  //   //   wineId: {
  //   //     type: Schema.Types.ObjectId,
  //   //     ref: "night",
  //   //   },
  //   //   note: {
  //   //     type: String,
  //   //     trim: true,
  //   //   },
  //   // },
  //   // {
  //   //   id: "",
  //   //   mealId: "",
  //   //   wineId: ""
  //   // },
  // ],