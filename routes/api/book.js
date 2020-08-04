const router = require("express").Router();
const bookController = require("../../controllers/bookController");

router.route("/")
    .get(bookController.findAll)


router.route("/:bookTitle")
    .get(bookController.findByTitle)

module.exports = router;