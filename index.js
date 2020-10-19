const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');
const app = express();
const config = require('./config');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));

const routes = require("./routes/routes.js")(app);

const server = app.listen(config.PORT, function () {
    console.log('Listening on port %s...', server.address().port);
});