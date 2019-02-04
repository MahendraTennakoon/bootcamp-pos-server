const Sequelize = require('sequelize');
const config = require('./config.json');

const sequelize = new Sequelize(config.database, 'john_doe', '1qaz2wsx', {
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
    },
    logging: false
});

module.exports = sequelize;