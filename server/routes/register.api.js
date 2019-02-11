var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
var config = require('../../config/db.config');
var User = require('../dao/user.dao');


var express = require('express');
router = express.Router();


module.exports = router;


/** 
 * This is the user registration api
 * URI http://hostname:port/resgister
 * API Input 
 * {
 *  "name":"username",
 *  "email":"user email",
 *  "password":"user password"
 * }
 * 
 * It will make an entry of user in user_details table
 * */

router.post('/register', function (req, res) {
    console.log("api called")
    var hashedPassword = bcrypt.hashSync(req.body.password, 8);

    User.createUser({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword
    },
        function (err, user) {
            if (err) return res.status(500).send("There was a problem registering the user.")
            // create a token
            var token = jwt.sign({ id: user.id }, config.secret.key, {
                expiresIn: 86400 // expires in 24 hours
            });
            res.status(200).send({ auth: true, token: token });
        });
});