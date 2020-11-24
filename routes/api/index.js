const router = require("express").Router();
const userRoutes = require("./user");
const nightRoutes = require("./nightin");

// Book routes
router.use("/nightin", nightRoutes);
router.use("/user", userRoutes);

module.exports = router;
