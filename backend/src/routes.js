const express = require('express');
const routes  = express.Router();
const example = require('./controllers/example')

routes.post('/teste', example.create)


module.exports =  routes;