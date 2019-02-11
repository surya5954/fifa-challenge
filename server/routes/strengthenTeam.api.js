var getInfo = require('../dao/getInfo.dao');

/** 
 * URI http://host_name:port/api/strengthenTeam
 * API input format 
 * {
 *  "club_name":"Real Madrid CF"
 * }
 * 
*/
router.post("/strengthenTeam",function(req,res){
    var club_name = req.body.club_name;
    getInfo.strengthen_team(club_name, function(err,result){
        if (err) {
            return res.status(500).send({ Error: true, message: 'Internal Server Error !' });
        }
        return res.status(200).send({
            Error: false,
            data: result
        })
    })
})