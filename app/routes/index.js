const app = require('express')();

// For parsing incoming request bodies.
const bodyParser = require('body-parser');
// Parse JSON data in request bodies.
app.use(bodyParser.json());
// Allow rich content (arrays/objects) in url encoded data.
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/items', require('./items'));
app.use('/users', require('./users'));
app.use('/orders', require('./orders'));
app.use('/sessions', require('./sessions'));

module.exports = app;