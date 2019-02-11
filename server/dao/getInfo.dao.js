var common = require("./common.dao");

exports.get_player_info = function (player_name, cb) {
    var sql = "SELECT * FROM `playerpersonaldata` WHERE Name Like '" + player_name + "' ORDER BY `Age` DESC, `Overall` DESC, `Potential` DESC";

    common.executeQuery(sql, "", function (err, res) {
        if (err) {
            return cb(true);
        }
        return cb(false, res);
    })
}

exports.get_club_player_list = function (club_name, cb) {
    var sql = "SELECT * FROM `playerpersonaldata` WHERE Club Like '" + club_name + "'";
    common.executeQuery(sql, "", function (err, res) {
        if (err) {
            return cb(true);
        }
        return cb(false, res);
    })
}

exports.strengthen_team = function (club_name, cb) {
    var sql = "SELECT pd.Name, pd.age,pd.overall, pd.potential,ppd.ST,ppd.CAM,ppd.CF FROM `playerpersonaldata` pd\
                INNER JOIN playerplayingpositiondata ppd\
                ON pd.id = ppd.id\
                WHERE CLUB LIKE '"+ club_name + "'";

    common.executeQuery(sql, "", function (err, res) {
        if (err) {
            return cb(true)
        }
        var result = res.filter(function (elem) {
            return elem.st < 80 || elem.CAM < 80 || elem.CF < 80;
        })
        return cb(false, result);
    })

}