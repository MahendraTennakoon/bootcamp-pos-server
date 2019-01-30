const express = require('express');
const router = express.Router();

const User = require('../models/User')

router.route('/')
    .post((req, res, next) => {
        User.findOne({ where: { user_name: req.body.user_name } }).then(user => {
            if (user && user.password === req.body.password) {
                res.cookie('pos_app_session', user.user_id);
                res.json({
                    user_name: user.user_name,
                    first_name: user.first_name,
                    last_name: user.last_name
                });
            } else {
                res.send(401);
            }
        })
        .catch(next);
    });

module.exports = router;