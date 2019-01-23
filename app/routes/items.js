const express = require('express');
const router = express.Router();

const Item = require('../models/Item')

router.route('/')
    .get((req, res, next) => {
        Item.findAll().then(items => {
            res.json(items);
        })
        .catch(next);
    });

module.exports = router;