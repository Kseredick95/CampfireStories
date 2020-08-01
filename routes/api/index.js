const router = require("express").Router();
const userRoutes = require("./user");
const bookRoutes = require("./book");
const achievementRoutes = require("./achievement")

//User routes

router.use("/user", userRoutes);
router.use("/book", bookRoutes);
router.use("/achievment", achievementRoutes);

module.exports = router;