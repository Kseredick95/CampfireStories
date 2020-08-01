const router = require("express").Router();
const userController = require("../../controllers/userController");

//Connects to "/api"
router.route("/")
    .get(userController.findById);

router.route("/")
    // .get(userController.findByEmail)
    .post(userController.create);

module.exports = router;