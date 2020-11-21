const router = require("express").Router();
const kateRoutes = require("./kates");

// Book routes
router.use("/kates", kateRoutes);

module.exports = router;
