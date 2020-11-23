const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Nightin collection and inserts the nightin below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/nightindb");

const nightSeed = [
  {
    title: "Hummus",
    date: new Date(Date.now()),
  },
  {
    title: "Cheeseburger",
    date: new Date(Date.now()),
  },
  {
    title: "Tuna Casserole",
    date: new Date(Date.now()),
  },
  {
    title: "Penne Vodka",
    date: new Date(Date.now()),
  },
];

db.Night.remove({})
  .then(() => db.Night.collection.insertMany(nightSeed))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
