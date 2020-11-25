const express = require("express");
const router = express.Router();
const passport = require("../../passport");
const db = require("../../models");
const User = require("../../models/user");
const bcrypt = require("bcryptjs");
// const userController = require("../../controllers/userController");

router.route("/register").post(async (req, res) => {
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
  // Validation
  User.findOne({ email }, async (err, doc) => {
    if (err) throw err;
    if (doc) res.send("User Already Exists");
    if (!doc) {
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = new User({
        email,
        password: hashedPassword,
      });
      await newUser.save();
      res.send("success");
    }
  });
});

router.route("/login").post(passport.authenticate("local"), (req, res) => {
  res.send("Successfully Authenticated!");
});

router.route("/user").get((req, res) => {
  res.send(req.user);
});

router.route("/logout").post((req, res) => {
  req.logout();
  res.send("success");
});

module.exports = router;
