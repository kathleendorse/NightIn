//bringing express router to handle our API routes for making calls to the database
//bringing in the controller with our Collection query methods
const router = require("express").Router();
const wineController = require("../../controllers/wineController");

// if a route matching "/" i.e. "/api/wine" is hit with a
  //GET, run the findAll query method
  //POST, run the create query method 
router.route("/")
  .get(wineController.findAll)
  .post(wineController.create);

//if a route matching "/api/wine/:id" is hit with a
  //GET, run the findById query method
  //PUT, run the update query method
  //DELETE, run the remove query method
router
  .route("/:id")
  .get(wineController.findById)
  .put(wineController.update)
  .delete(wineController.remove);

module.exports = router;


//these routes and calls will be hit when the methods defined inside client>src>utils>API.js are invoked
//***However they are currently not listed in that file.