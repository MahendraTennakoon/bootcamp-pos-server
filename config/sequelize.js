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

module.exports = sequelize;