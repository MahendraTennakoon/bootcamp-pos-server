const app = require('express')();

app.use('/items', require('./items'));

module.exports = app;