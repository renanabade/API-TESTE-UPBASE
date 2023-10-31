const Joi = require('joi');

const alunoSchema = Joi.object({
  nome_sobrenome: Joi.string().trim().required().messages({
    'any.required': 'O campo Nome e Sobrenome é obrigatório',
    'string.empty': 'O campo Nome e Sobrenome não pode estar vazio',
    'string.base': 'O campo Nome e Sobrenome deve conter texto',
  }),
  usuario: Joi.string().trim().required().messages({
    'any.required': 'O campo Usuário é obrigatório',
    'string.empty': 'O campo Usuário não pode estar vazio',
    'string.base': 'O campo Usuário deve conter texto',
  }),
  email: Joi.string().email().required().messages({
    'any.required': 'O campo de Email é obrigatório',
    'string.empty': 'O campo de Email não pode estar vazio',
    'string.email': 'O campo de Email deve conter um endereço de email válido',
    'string.base': 'O campo de Email deve conter texto',
  }),
  senha: Joi.string().trim().required().messages({
    'any.required': 'Senha é um campo obrigatório',
    'string.empty': 'O campo senha não pode estar vazio',
    'string.base': 'O campo senha deve ser texto',
  }),

  repita_senha: Joi.string().trim().required().messages({
    'any.required': 'Repita sua senha é um campo obrigatório',
    'string.empty': 'O campo repita sua senha não pode estar vazio',
    'string.base': 'O campo repita sua senha deve ser texto',
  }),
});

module.exports = {
  alunoSchema,
};
