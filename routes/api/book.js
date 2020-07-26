const router = require("express").Router();
const bookController = require("../../controllers/bookController");

router.route("/")
    .get(bookController.findAll)

module.exports = router;