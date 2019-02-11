var mysql = require('mysql');
let config = require("../../config/db.config");

exports.executeQuery = function (sql, params, cb) {
    let connection = mysql.createConnection(config.dbconnectionObj);
    connection.connect(function (err) {
        if (!err) {
            var query = connection.query(sql, params, function (error, results, fields) {
                if (error) {
                    //                    log.info("Error SQL");
                    //                    log.info(query.sql);
                    console.log("Error SQL");
                    console.log(query.sql);
                    console.log("--------------------");
                    connection.end();
                    return cb(true, results);
                } else {
                    return cb(null, results);
                    //connection.end();
                }
            });
            //            log.info(query.sql);
            console.log(query.sql);
            console.log("--------------------");
            connection.end();
        } else {
            return cb(true, err);
        }
    });
};
