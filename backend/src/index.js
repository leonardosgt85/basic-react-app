const express = require('express');
const routes = require('./routes');


const app = express();
console.log('teste')
app.use(express.json());
app.use(routes);


app.listen(3333);