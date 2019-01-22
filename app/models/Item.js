const Sequelize = require('sequelize');
const sequelize = new Sequelize('bootcamp_pos', 'john_doe', '1qaz2wsx', {
    host: 'localhost',
    dialect: 'mysql',
    operatorsAliases: false,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    define: {
        freezeTableName: true,
        timestamps: false
    }
});

const Item = sequelize.define('item', {
    id: {
        type: Sequelize.STRING,
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