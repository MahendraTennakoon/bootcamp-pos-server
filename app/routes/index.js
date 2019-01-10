const app = require('express')();

app.use('/orders', require('./orders'));

module.exports = app;