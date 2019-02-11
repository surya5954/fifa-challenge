const express = require("express");
var bodyParser = require('body-parser');
const app = express();
const path = require("path");
var authService = require(__dirname + '/server/services/authentication.service');


//middleware set to use static angular build distributable directory 


app.use(function (req, res, next) {
    res.setHeader("Access-Control-Allow-Methods", "POST, PUT, OPTIONS, DELETE, GET");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(express.static(path.join(__dirname, 'dist')));

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


/**
 * For user registration to Application first user needs to call register API
 */
app.use('/register', require(__dirname + '/server/routes/register.api'));

/**
 * All the other API will be redirected from here
 * authService is used for the authentication purpose of every user for every call on api
 */
app.use('/api', authService.authenticateUser, require(__dirname + '/server/routes/api'))

//catch all the other routes request and return it to the index
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
})


const port = process.env.PORT || 3000;
app.listen(port, (req, res) => {
    console.log(`Server running on port ${port}...`);
})
