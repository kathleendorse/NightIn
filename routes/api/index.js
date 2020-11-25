const router = require("express").Router();
const userRoutes = require("./user");
const nightRoutes = require("./nightin");
const wineRoutes = require("./wine");

// Book routes
router.use("/nightin", nightRoutes);
router.use("/user", userRoutes);
router.use("/wine", wineRoutes);

module.exports = router;
