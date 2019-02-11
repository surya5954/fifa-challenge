var getInfo = require('../dao/getInfo.dao');


/** 
 * URI http://host_name:port/api/getClubPlayerList
 * API input format 
 * {
 *  "club_name":"Real Madrid CF"
 * }
 * 
*/
router.post("/getClubPlayerList", function (req, res) {
    var club_name = req.body.club_name;

    getInfo.get_club_player_list(club_name, function (err, result) {
        if (err) {
            return res.status(500).send({ Error: true, message: 'Internal Server Error !' });
        }
        return res.status(200).send({
            Error: false,
            data: result
        })
    })
})