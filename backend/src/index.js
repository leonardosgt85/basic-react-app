const express = require('express');
const routes = require('./routes');

//********************************************CRYPTO*************************************************** */
//#############instanciando o Crypto
var CryptoJS = require("crypto-js");
//#############criptografando um  texto
var ciphertext = CryptoJS.AES.encrypt('testes', 'secret key 123').toString();
//console.log(ciphertext)
//#############descriptografando um texto
var bytes  = CryptoJS.AES.decrypt(ciphertext, 'secret key 123');
//#############codificando para exibição correta
var originalText = bytes.toString(CryptoJS.enc.Utf8);
//console.log(originalText)
//*****************************************CRYPTO_FIM************************************************** */


const app = express();
app.use(express.json());
app.use(routes);


app.listen(3333);