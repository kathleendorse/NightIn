const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Kates collection and inserts the kates below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/nightindb"
);

const kateSeed = [
  {
    title: "Hummus",
    date: new Date(Date.now())
  },
  {
    title: "Cheeseburger",
    date: new Date(Date.now())
  },
  {
    title: "Tuna Casserole",
    date: new Date(Date.now())
  },
  {
    title: "Penne Vodka",
    date: new Date(Date.now())
  }
];

db.Kate
  .remove({})
  .then(() => db.Kate.collection.insertMany(kateSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
