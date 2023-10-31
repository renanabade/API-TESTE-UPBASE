const express = require('express');
const router = express();

const { cadastroAluno } = require('./controladores/cadastroAluno');
const { alunoSchema } = require('./schema/aluno');
const { validacaoBody } = require('./intermediarios/validacaoBody');

router.post('/aluno/cadastro', validacaoBody(alunoSchema), cadastroAluno);

module.exports = router;
