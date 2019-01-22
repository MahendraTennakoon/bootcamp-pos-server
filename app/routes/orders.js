const express = require('express');
const router = express.Router();

const Order = require('../models/Order')

router.route('/')
    .get((req, res) => {
        Order.findAll().then(orders => {
            res.json(orders);
        })
    });

module.exports = router;