const router = require("express").Router();
const nightRoutes = require("./nightin");

// Book routes
router.use("/nightin", nightRoutes);

module.exports = router;
