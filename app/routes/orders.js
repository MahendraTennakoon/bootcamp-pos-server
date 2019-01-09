const express = require('express');
const router = express.Router();

router.route('/')
    .get((req, res) => {
        res.json({id: "001"});
    });

module.exports = router;