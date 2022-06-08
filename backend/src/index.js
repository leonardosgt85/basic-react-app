const express = require('express');
const routes = require('./routes');
var CryptoJS = require("crypto-js");



var ciphertext = CryptoJS.AES.encrypt('testes', 'secret key 123').toString();

console.log(ciphertext)

var bytes  = CryptoJS.AES.decrypt(ciphertext, 'secret key 123');

var originalText = bytes.toString(CryptoJS.enc.Utf8);


console.log(originalText)

const app = express();
app.use(express.json());
app.use(routes);


app.listen(3333);