/**
 * Zeus - A fullstack CMS for Deta Space
*/

const config = require('./config.json');
const express = require('express');
const mustacheExpress = require('mustache-express');

// Administration Panel
const app = express();

// Register Mustache templating engine
app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');
//app.set('views', __dirname + '/views');

app.use(express.static('./admin'));

app.listen(config.port, () => {
    console.log('Zeus started');
});