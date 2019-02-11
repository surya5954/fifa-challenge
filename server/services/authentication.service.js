var jwt = require('jsonwebtoken');
var config = require('../../config/db.config');


/** 
 * This is user authentication API
 * It requires access token in header as x-access-token parameter
 * this funtion is used as middleware function for all the api call
*/
exports.authenticateUser = function (req, res, next) {
    var token = req.headers['x-access-token'];
    if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });

    jwt.verify(token, config.secret.key, function (err, decoded) {
        if (err) {
            console.log(err);
            return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
        }
        // res.status(200).send(decoded);
        next();
    });
};
