const express = require('express');
const app = express();
const cors = require('cors')
var puerto = 3000;
const PATH = '/'
const route = require('./routes.config')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(PATH, route);
app.use(cors());



module.exports = {app, puerto};
