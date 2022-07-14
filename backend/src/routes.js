const express = require('express');
const routes  = express.Router();
const login = require('./controllers/login')

routes.post('/login', login.create);


module.exports =  routes;