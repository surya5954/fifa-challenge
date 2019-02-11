var getInfo = require('../dao/getInfo.dao');


/** 
 * URI http://host_name:port/api/getPlayerInfo
 * API input format 
 * {
 *  "player_name":"Cristiano Ronaldo"
 * }
 * 
*/

router.post('/getPlayerInfo',function(req,res){
    var player_name = req.body.player_name;
    getInfo.get_player_info(player_name,function(err,result){
        if(err){
            return res.status(500).send({ Error: true, message: 'Internal Server Error !' });
        }
        return res.status(200).send({
            Error:false,
            data:result
        })
    })
})


