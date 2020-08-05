const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

// API Routes
router.use("/api", apiRoutes);

router.use((req, res) =>
  res.sendFile(path.join(__dirname, "../client/build/index.html"))
);

router.route("/signout")
.get(function(req,res) {
    req.logout();
    res.redirect("/login")
})

module.exports = router;