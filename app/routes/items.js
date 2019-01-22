const express = require('express');
const router = express.Router();

const Item = require('../models/Item')

router.route('/')
    .get((req, res) => {
        Item.findAll().then(items => {
            res.json(items);
        })
    });

module.exports = router;