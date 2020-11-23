const router = require("express").Router();
const nightinController = require("../../controllers/nightinController");

// Matches with "/api/nightin"
router.route("/").get(nightinController.findAll).post(nightinController.create);

// Matches with "/api/nightin/:id"
router
  .route("/:id")
  .get(nightinController.findById)
  .put(nightinController.update)
  .delete(nightinController.remove);

module.exports = router;
