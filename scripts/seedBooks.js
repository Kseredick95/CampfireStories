const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/campfirestories"
);

const bookSeed = [{
        "pageId": "initial",
        "image": "https://ozorianprophet.eu/wp-content/uploads/sites/3/2019/10/fantasy-eyes-forest-300x129.jpg",
        "text": "You are an adventurer. You come across a big castle. There are large gates at the front. Off to the right, there are a few crumbling walls. There are some old broken siege weapons out in the fields as you approach. Finally your companion says he was quite a skill climber back in the day. All you would need to do is find the proper climbing gear. How will you get into the castle?",
        "choices": [{
                "text": "Approach the gates and hope for the best",
                "pageId": "choice a"
            },
            {
                "text": "Search the crumbled walls",
                "pageId": "choice b"
            },
            {
                "text": "Search the siege weapons",
                "pageId": "choice c"
            }
        ]
    },
    {
        "pageId": "choice a",
        "image": "https://image.shutterstock.com/image-photo/castle-gate-260nw-599940335.jpg",
        "text": "You are attacked by the guard and you die.",
        "choices": [{
                "text": "Approach the gates and hope for the best",
                "pageId": "choice aa"
            },
            {
                "text": "Search the crumbled walls",
                "pageId": "choice ab"
            },
            {
                "text": "Search the siege weapons",
                "pageId": "choice ac"
            }
        ]
    },
    {
        "pageId": "choice aa",
        "image": "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?ixlib=rb-1.2.1&ixpageId=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60",
        "text": "sTUpId IMAGE"
    },
    {
        "pageId": "choice b",
        "image": "https://2.bp.blogspot.com/_GtqC8LJ3x4c/TVKxnH-d_FI/AAAAAAAAAvQ/VU6Q_1sHLqU/s1600/crumbling%2Bcastle%2Bwalls.jpg",
        "text": "You try the crumbled walls off to the sidee of the gates. They are unreachable due to the moat beneath."
    },
    {
        "pageId": "choice c",
        "image": "https://wattsunique.com/blog/wp-content/uploads/balista103.jpg",
        "text": "You try the broken siege weapons. They are all broken but at least you managed to escape the guards that just happened to be coming out the gate at the same time. If you had approached the gates, they would have speared you."
    }
]

db.Book
    .remove({})
    .then(() => db.Book.collection.insertMany(bookSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });