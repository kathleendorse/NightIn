const router = require("express").Router();
const wineController = require("../../controllers/wineController");

// Matches with "/api/winein"
router.route("/").get(wineController.findAll).post(wineController.create);

// Matches with "/api/winein/:id"
router
  .route("/:id")
  .get(wineController.findById)
  .put(wineController.update)
  .delete(wineController.remove);

module.exports = router;