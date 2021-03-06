const express = require('express');
const config = require('../config/config.json');
// For parsing incoming request bodies.
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Parse JSON data in request bodies.
app.use(bodyParser.json());
// Allow rich content (arrays/objects) in url encoded data.
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// Load routes.
const routes = require('./routes');
app.use(routes);

module.exports = app;

// Start server -------------------------------------------------
app.listen(config.port);
console.log(`pos-server listening on port ${config.port}.`);