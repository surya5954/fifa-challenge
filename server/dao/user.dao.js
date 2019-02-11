var common = require("./common.dao");

exports.createUser = function (data, cb) {
    var sql = "Insert INTO user_details (name, email, password) VALUES ('" + data.name + "','" + data.email + "','" + data.password + "')";
    common.executeQuery(sql, '', function (err, res) {
        if (err) {
            return cb(err);
        }
        common.executeQuery("SELECT id FROM `user_details` ORDER BY `user_details`.`id` DESC LIMIT 1", "", function (err, res) {
            console.log("user details are successfully inserted into database.");
            console.log(res);
            return cb(false, res);
        })
    })
}