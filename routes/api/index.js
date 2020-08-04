const router = require("express").Router();
const bcrypt = require("bcrypt")
const userRoutes = require("./user");
const bookRoutes = require("./book");
const achievementRoutes = require("./achievement")
const db = require("../../models/")

//User routes

router.use("/user", userRoutes);
router.use("/book", bookRoutes);
router.use("/achievment", achievementRoutes);

router.route("/login").post(async (req, res) => {
    try {
        let user = await db.User.findOne({ email: req.body.email }).exec();

        console.log(user.password , req.body.password)
        if (!user) {
            return res.status(400).send({ message: "This email does not exist" });
        }
        //FIX ME - compareSync not working
        user.comparePassword(req.body.password, (err, match) => {
            if (err) throw err;
            else if (!match) {
                console.log("Password is not correct")
            } else {
                console.log("Password is correct")
            }
        });
    } catch (error) {
        res.status(500).send(error);
    }
});

//If no api - reroute
router.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
  });

module.exports = router;