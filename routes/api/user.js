const express = require("express");
const router = require("express").Router();
const passport = require("../../passport");
const userController = require("../../controllers/userController");

//user sign up
router.route("/register").post(userController.userCreate);

//user login
router.route("/login").post(passport.authenticate("local"), (req, res) => {
  res.json({
    email: req.user.email,
    id: req.user.id,
    //added
    favs: req.user.favs,
  });
});

router.route("/addRecipe").put(userController.addRecipe);

router.route("/user").get((req, res) => {
  res.send(req.user);
});

// router.route("/logout").post((req, res) => {
//   console.log("success logout");

//   req.logout();
//   res.send("logout success");
//   console.log(res);
// });

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
