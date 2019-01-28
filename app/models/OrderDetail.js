const Sequelize = require('sequelize');
const sequelize = require('../../config/sequelize');
const Order = require('./Order');
const Item = require('./Item');

const OrderDetail = sequelize.define('order_details', {
    order_id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    item_id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    quantity: {
        type: Sequelize.INTEGER
    }
});

module.exports = OrderDetail;