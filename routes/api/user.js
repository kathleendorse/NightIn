const express = require("express");
const router = require("express").Router();
const passport = require("../../passport");
const userController = require("../../controllers/userController");

//user sign up
router.route("/register").post(userController.userCreate);

//user login
router.route("/login").post(passport.authenticate("local"), (req, res) => {
  res.json({
    _id: req.user.id,
    email: req.user.email,
    favs: req.user.favs,
  });
});

//gets last index of fav array 
router.route("/:userId")
.get(userController.findLatestFav);

//add favorite to favs array
router.route("/addFav").put(userController.addFavorite);

router.post("/logout", (req, res) => {
  //   console.log(req.user);
  if (req.user) {
    req.logout();
    res.send({ msg: "logging out" });
    // console.log("user logged out" + req.user);
  } else {
    res.send({ msg: "no user to log out" });
  }
});

module.exports = router;
