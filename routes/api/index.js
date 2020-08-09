const router = require("express").Router();
const userRoutes = require("./user");
const bookRoutes = require("./book");
const achievementRoutes = require("./achievement");
const db = require("../../models/");

//User routes

router.use("/user", userRoutes);
router.use("/book", bookRoutes);
router.use("/achievment", achievementRoutes);

router.route("/login").post(async (req, res) => {
  try {
    let user = await db.User.findOne({ email: req.body.email }).exec();

<<<<<<< HEAD
        if (!user) {
            return res.status(400).send({ message: "This email does not exist" });
        }
        
        user.comparePassword(req.body.password, (err, match) => {
            if (err) throw err;
            else if (!match) {
                return res.status(400).send({ message: "Password is incorrect" })
            } else {
                return res.json(user)
            }
        })
    } catch (error) {
        res.status(500).send(error);
=======
    if (!user) {
      return res.status(400).send({ message: "This email does not exist" });
>>>>>>> 6c89363ebd16e24ee0e1da18df817c536701202b
    }

    user.comparePassword(req.body.password, (err, match) => {
      if (err) throw err;
      else if (!match) {
        return res.status(400).send({ message: "Password is incorrect" });
      } else {
        console.log("Password is correct");
        return res.json(user);
      }
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

//If no api - reroute
router.use(function (req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
