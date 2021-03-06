const Sequelize = require('sequelize');
const sequelize = require('../../config/sequelize');

const Item = sequelize.define('item', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING
    },
    price: {
        type: Sequelize.NUMERIC
    }
});

module.exports = Item;