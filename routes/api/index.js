const router = require("express").Router();
const userRoutes = require("./user");
const recipeRoutes = require("./recipe");
const wineRoutes = require("./wine");

// If the route contains /nightin use the routes in the corresponding file
// If the route contains /user use the routes in the corresponding file
// If the route contains /wine use the routes in the corresponding file
router.use("/recipe", recipeRoutes);
router.use("/user", userRoutes);
router.use("/wine", wineRoutes);

module.exports = router;
