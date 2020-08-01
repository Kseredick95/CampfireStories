const router = require("express").Router();
const achievementController = require("../../controllers/achievementController");

router.route("/")
    .get(achievementController.findById);

module.exports = router;