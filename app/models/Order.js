const Sequelize = require('sequelize');
const sequelize = require('../../config/sequelize');

const Order = sequelize.define('order', {
    order_id: {
        autoIncrement: true,
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    created_date: {
        type: Sequelize.DATEONLY
    }
});

module.exports = Order;