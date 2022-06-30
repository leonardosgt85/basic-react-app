const express = require('express');
const routes = require('./routes');
//O CORS está sendo utilizado para driblar o proxy.
//a linha abaixo faz referência ao uso do CORS PARA DESENVOLVIMENTO, DEVE SER RETIRADA EM PRODUÇÃO
const cors=require("cors");
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

//cors, remover a constante abaixo
const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}
//cors, remover em produção
app.use(cors(corsOptions)) // Use this after the variable declaration


app.use(express.json());
app.use(routes);


app.listen(3333);