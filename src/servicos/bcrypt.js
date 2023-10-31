const bcrypt = require('bcrypt');

const criptografarSenha = (senha) => {
  const salt = bcrypt.genSaltSync(10);
  return bcrypt.hashSync(senha, salt);
};

module.exports = { criptografarSenha };
