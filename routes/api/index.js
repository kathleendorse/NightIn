const router = require("express").Router();
const userRoutes = require("./user");
const nightRoutes = require("./nightin");
const wineRoutes = require("./wine");

// If the route contains /nightin use the routes in the corresponding file
// If the route contains /user use the routes in the corresponding file
// If the route contains /wine use the routes in the corresponding file
router.use("/nightin", nightRoutes);
router.use("/user", userRoutes);
router.use("/wine", wineRoutes);

module.exports = router;
