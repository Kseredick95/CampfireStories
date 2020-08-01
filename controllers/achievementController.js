const db = require("../models")

module.exports = {
    findById: function(req, res) {
        db.Achievement.findById(req.params.id)
          .then(dbAchievement => res.json(dbAchievement))
          .catch(err => res.status(422).json(err));
      }
}