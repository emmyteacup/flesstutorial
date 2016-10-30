'usr strict';

const express = require('express');
const routes = require('./src/routes')

const PORT = 8080;

const app = express();

app.use(express.static( __dirname + '/public'));

routes(app);

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);
