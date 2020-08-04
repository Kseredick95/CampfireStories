const router = require("express").Router();
const userController = require("../../controllers/userController");

//Connects to "/api"
router.route("/")
    .get(userController.findAll)
    .post(userController.create);

router.route("/:email")
    .get(userController.findByEmail)
    .put(userController.update)
    .delete(userController.remove)
    .get(userController.findById);

module.exports = router;