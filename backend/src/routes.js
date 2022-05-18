const express = require('express');
const connection = require('./database/connection');
const routes  = express.Router();

routes.get('/teste', async (req, res)=>{
    await connection('teste').withSchema('estatistica').insert({testecampo:'testeconnection'})
    return res.json({resposta:'teste'});
})

module.exports =  routes;