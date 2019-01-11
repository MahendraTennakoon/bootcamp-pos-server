const express = require('express');
const router = express.Router();

router.route('/')
    .get((req, res) => {
        res.json([
            {
                "id": "0001",
                "name": "Classic Burger",
                "price": 450
            },
            {
                "id": "0002",
                "name": "Backpackers Burger",
                "price": 725
            },
            {
                "id": "0003",
                "name": "Bistro Burger",
                "price": 250
            },
            {
                "id": "0004",
                "name": "Chicken Burger",
                "price": 300
            },
            {
                "id": "0005",
                "name": "BBQ Burger",
                "price": 360
            }
        ]);
    });

module.exports = router;