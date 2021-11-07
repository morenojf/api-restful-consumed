const express = require('express');
const app = express();
var puerto = 3000;
const PATH = '/'
const route = require('./routes.config')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(PATH, route);



module.exports = {app, puerto};
