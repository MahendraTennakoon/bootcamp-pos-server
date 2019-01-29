const express = require('express');
const router = express.Router();

const User = require('../models/User')

router.route('/')
    .post((req, res, next) => {
        User.findOne({ where: { user_name: req.body.user_name } }).then(user => {
            if (user) {
                res.cookie('pos_app_session', user.user_id);
                res.json(user);
            } else {
                res.send(401);
            }
        })
        .catch(next);
    });

module.exports = router;