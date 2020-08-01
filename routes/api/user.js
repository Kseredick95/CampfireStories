const router = require("express").Router();
const userController = require("../../controllers/userController");

//Connects to "/api"
router.route("/")
    .get(userController.findById)

module.exports = router;
