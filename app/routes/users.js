const express = require('express');
const router = express.Router();

const User = require('../models/User')

router.route('/')
    .get((req, res, next) => {
        User.findAll().then(users => {
            res.json(users);
        })
        .catch(next);
    });

module.exports = router;