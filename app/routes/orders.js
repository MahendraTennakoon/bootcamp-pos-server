const express = require('express');
const router = express.Router();
const Sequelize = require('sequelize');
const sequelize = require('../../config/sequelize');

const Order = require('../models/Order');
const OrderDetail = require('../models/OrderDetail');

router.route('/')
    .get((req, res, next) => {
        Order.findAll().then(orders => {
            res.json(orders);
        })
            .catch(next);
    })
    .post((req, res, next) => {
        Order.create(req.body)
            .then(order => {
                res.json(order)
            })
            .catch(next);
    });

router.route('/:order_id')
    .get((req, res, next) => {
        const order_id = req.params.order_id;

        const query = `SELECT i.id, i.name, i.price, od.quantity
        FROM bootcamp_pos.order o, bootcamp_pos.order_details od, bootcamp_pos.item i 
        WHERE od.order_id = ${order_id} AND o.order_id = ${order_id} AND od.item_id = i.id`;

        sequelize.query(query, { raw: true, type: Sequelize.QueryTypes.SELECT })
            .then((order_details) => {
                res.json(order_details);
            })
            .catch(next);
    })
    .put((req, res, next) => {
        const order_id = parseInt(req.params.order_id);

        const payload = req.body.map((data) => {
            return {
                order_id: order_id,
                item_id: data.id,
                quantity: data.quantity
            }
        });

        OrderDetail.bulkCreate(payload, {
            fields: ["order_id", "item_id", "quantity"],
            updateOnDuplicate: ["quantity"]
        })
        .then((result) => {
            res.json(result);
        })
        .catch(next);
    });


router.route('/:order_id/:item_id')
    .delete((req, res, next) => {
        const order_id = parseInt(req.params.order_id);
        const item_id = parseInt(req.params.item_id);

        OrderDetail.destroy({
            where: {
                order_id: order_id,
                item_id: item_id
            }
        })
        .then((result) => {
            res.json(result);
        })
        .catch(next);
    });

module.exports = router;