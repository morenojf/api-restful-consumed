const express = require('express')
const app = express()
const usersEndpoints = require('../components/users/routes')
const postsEndpoints = require('../components/posts/routes')
const GLOBAL_PATH = '/api/v1'

app.use(GLOBAL_PATH, usersEndpoints)
app.use(GLOBAL_PATH, postsEndpoints)

module.exports = app