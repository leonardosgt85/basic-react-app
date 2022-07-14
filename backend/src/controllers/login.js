const connection = require('../database/connection');
const jwt = require('jsonwebtoken');

module.exports = {

    async create(req, res){
        try{
        const {login, pwd} = req.body;
        //teste de caracteres especiais no campo.
        const regex = /\W|_/;
        const barrier1 = regex.test(login);
        const barrier2 = regex.test(pwd);

        if(barrier1 != false) throw error = {error:'Caracteres especiais não podem ser utilizados no campo login', status:405};
        if(barrier2 != false) throw error = {error:'Caracteres especiais não podem ser utilizados no campo senha', status:405};
        //fim da validação de caracteres especiais

        //validação do usuario
        const [usuario] = await connection('estatistica.usuario').select('id','cpf', 'email').where('cpf',login).andWhere('password', pwd);
        if(!usuario || usuario === undefined) throw error = {error: 'Usuário ou senha inválido!', status:401};
        //fim da validação do usuario

        //#############################Geração de token###################################
        let token = await jwt.sign(
                {
                  id_usuario: usuario.id,
                  email:usuario.email,
                },
                `${usuario.id}${usuario.cpf}${process.env.KEY_TOKEN_CREATE}`,
                {
                  expiresIn: '8h',
                }
              );
        //Fim do token
              
        return res.status(200).json(token);
        }catch(error){
            //console.log(error)
            return res.status(error.status?error.status:400).json(error.error);
        }

    }
}