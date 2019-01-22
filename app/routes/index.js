const app = require('express')();

app.use('/items', require('./items'));
app.use('/users', require('./users'));
app.use('/orders', require('./orders'))

module.exports = app;