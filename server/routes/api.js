var express = require('express');
/** Contains route to all APIs  **/
router = express.Router();
require('./getPlayerInfo.api');
require('./getClubPlayerList.api');
require('./strengthenTeam.api');


module.exports = router;
