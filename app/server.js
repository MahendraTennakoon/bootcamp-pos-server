const express = require('express');
// For parsing incoming request bodies.
const bodyParser = require('body-parser');

const app = express();

// Allow rich content (arrays/objects) in url encoded data.
app.use(bodyParser.urlencoded({ extended: true }));
// Parse JSON data in request bodies.
app.use(bodyParser.json());

// Start server -------------------------------------------------
const port = 8080;
app.listen(8080);
console.log(`pos-server listening on port ${port}.`);