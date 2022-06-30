const connection = require('../database/connection');
const jwt = require('jsonwebtoken');

module.exports = {
    async create(req, res){
              const cryptoKey = '123456';

            //#############################Geração de token###################################
              let token;
              if(req.body.dados == 123){

                token = await jwt.sign(
                      {
                        id_usuario: 'user_test',
                        email:'teste@user.com',
                      },
                      'sLBsz*KU8mAif&aT',
                      {
                        expiresIn: '1m',
                      }
                    );
              
                    
              }else{
                token = {teste:'teste'}
              }
              //#################################################################################
              

              //********************************************CRYPTO*************************************************** */
            //#############instanciando o Crypto
            var CryptoJS = require("crypto-js");
            //#############criptografando um  texto
            var ciphertext = CryptoJS.AES.encrypt(token, cryptoKey).toString();
            //console.log(ciphertext)
            /*#############descriptografando um texto
            var bytes  = CryptoJS.AES.decrypt(ciphertext, 'secret key 123');
            //#############codificando para exibição correta
            var originalText = bytes.toString(CryptoJS.enc.Utf8);
            //console.log(originalText)
            //*****************************************CRYPTO_FIM************************************************** */


              await connection('teste').withSchema('estatistica').insert({testecampo:'testeconnection'})
              return res.json({resposta:'teste', token: ciphertext, tempToken:token});
            }
}