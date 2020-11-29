//bringing express router to handle our API routes for making calls to the database
//bringing in the controller with our Collection query methods
const router = require("express").Router();
const nightinController = require("../../controllers/nightinController");

// if a route matching "/" i.e. "/api/nightin" is hit with a
  //GET, run the find query method
  //POST, run the create query method 
router.route("/")
//  .get(nightinController.findAll) //commented out for testing
  .post(nightinController.recipeCreate)
  .get(nightinController.recipeFind); //added

//if a route matching "/api/nightin/:id" is hit with a
  //GET, run the findById query method
  //PUT, run the update query method
  //DELETE, run the remove query method
router.route("/:id")
  .get(nightinController.recipeFindById)
  .put(nightinController.recipeUpdate)
  .delete(nightinController.recipeRemove);

module.exports = router;


//These routes and calls will be hit when the methods defined inside client>src>utils>API.js are invoked