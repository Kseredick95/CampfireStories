const db = require("../models");
const bcrypt = require("bcrypt")
const User = require("../models/user");

module.exports = {
  findAll: function(req, res) {
    db.User.find(req.query)
      .then(dbUser => res.json(dbUser))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.User.findById({ _id: req.params.id})
      .then(dbUser => res.json(dbUser))
      .catch(err => res.status(422).json(err));
  },
  findByEmail: function(req, res) {
    db.User.findOne(req.body)
    .then(dbUser => res.json(dbUser))
    .catch(err => res.status(422).json(err));
  },
  create: async function(req, res) {
    try {
      req.body.password = bcrypt.hashSync(req.body.password, 10);
      let user = new User(req.body);
      let result = await user.save();
      res.send(result);
    } catch (err) {
      res.status(500).send(err);
    }
  },
  update: function(req, res) {
    db.User.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbUser => res.json(dbUser))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.User.findById(req.params.id)
      .then(dbUser => dbUser.remove())
      .then(dbUser => res.json(dbUser))
      .catch(err => res.status(422).json(err));
  }
};
