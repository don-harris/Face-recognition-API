var path = require('path')
var express = require('express')

var redditRoutes = require('./reddit')
var server = express()

server.use(express.static(path.join(__dirname, '../public')))

server.use('/api/v1/satellites', redditRoutes)

module.exports = server
