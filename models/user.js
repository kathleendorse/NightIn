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
  favs: [
    {
      mealId: {
        type: Schema.Types.ObjectId,
        ref: "night",
      },
      wineId: {
        type: Schema.Types.ObjectId,
        ref: "night",
      },
      note: {
        type: String,
        trim: true,
      },
    },
  ],
});

module.exports = mongoose.model("User", user);
