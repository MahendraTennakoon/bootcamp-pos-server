const express = require('express');
const router = express.Router();
const Sequelize = require('sequelize');
const sequelize = require('../../config/sequelize');

const Order = require('../models/Order');

router.route('/')
    .get((req, res) => {
        Order.findAll().then(orders => {
            res.json(orders);
        })
    });

router.route('/:order_id')
    .get((req, res) => {
        const order_id = req.params.order_id;

        const query = `SELECT i.id, i.name, i.price, od.quantity
        FROM bootcamp_pos.order o, bootcamp_pos.order_details od, bootcamp_pos.item i 
        WHERE od.order_id = ${order_id} AND o.order_id = ${order_id} AND od.item_id = i.id`;

        sequelize.query(query, { raw: true, type: Sequelize.QueryTypes.SELECT })
            .then((order_details) => {
                res.json(order_details);
            });
    });

module.exports = router;