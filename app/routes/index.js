const app = require('express')();

app.use('/items', require('./items'));
app.use('/users', require('./users'));

module.exports = app;