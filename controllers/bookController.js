const db = require("../models");

module.exports = {
    findAll: function(req, res) {
        db.Book.find(req.query).lean()
            .then(dbbook => res.json(dbbook))
            .catch(err => res.status(422).json(err));
    },
    findByTitle: function(req, res) {
            db.Book.findOne({ bookTitle: req.params.bookTitle }).lean()
                .then(dbBook => res.json(dbBook))
                .catch(err => res.status(422).json(err));
        }
        // create: function(req, res) {
        //     db.Book.create(req.body)
        //         .then(dbUser => res.json(dbUser))
        //         .catch(err => res.status(422).json(err));
        // },
        // update: function(req, res) {
        //     db.Book.findOneAndUpdate({ id: req.params.id }, req.body)
        //         .then(dbUser => res.json(dbUser))
        //         .catch(err => res.status(422).json(err));
        // }
};