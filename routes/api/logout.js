const router = require("express").Router();
const passport = require("../../config/passport")

router.route("/")
.get(function(req,res) {
    req.logout();
    res.redirect("/login")
})

module.exports = router;