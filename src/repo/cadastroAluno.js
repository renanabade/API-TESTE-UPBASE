const knex = require('../config/connection');

const emailExiste = async (email) => {
  const emailRegistrado = await knex('alunos').where({ email }).first();
  return emailRegistrado;
};

const usuarioExiste = async (usuario) => {
  const usuarioRegistrado = await knex('alunos').where({ usuario }).first();
  return usuarioRegistrado;
};

const registrarAluno = async (dadosAluno) => {
  const alunoRegistrado = await knex('alunos').insert(dadosAluno).returning({
    id: 'id',
    nome_sobrenome: 'nome_sobrenome',
    usuario: 'usuario',
    email: 'email',
  });

  return alunoRegistrado[0];
};

module.exports = {
  emailExiste,
  registrarAluno,
  usuarioExiste,
};
