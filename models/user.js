const mongoose = require("mongoose");
const user = new mongoose.Schema({
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
});

module.exports = mongoose.model("User", user);

// const user = new mongoose.Schema({
//   username: {
//     type: String,
//     unique: true,
//   },
//   password: String,
//   isAdmin: {
//     type: Boolean,
//     default: false,
//   },
// });

// module.exports = mongoose.model("User", user);
