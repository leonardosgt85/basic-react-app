const jwt = require('jsonwebtoken');
const pass = require('./pass');

module.exports = async (require, response, next) => {
  try {
    const token = require.headers.authorization.substring(7);
    const decode = jwt.verify(token, await pass.password());

    next();
  } catch (error) {
    return response
      .status(401)
      .json({ error: 'Erro na autenticação, refaça o login.' });
  }
};
