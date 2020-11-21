const router = require("express").Router();
const katesController = require("../../controllers/katesController");

// Matches with "/api/kates"
router.route("/")
  .get(katesController.findAll)
  .post(katesController.create);

// Matches with "/api/kates/:id"
router
  .route("/:id")
  .get(katesController.findById)
  .put(katesController.update)
  .delete(katesController.remove);

module.exports = router;
