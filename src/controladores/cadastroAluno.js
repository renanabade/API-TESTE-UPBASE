const {
  emailExiste,
  registrarAluno,
  usuarioExiste,
} = require('../repo/cadastroAluno');
const { criptografarSenha } = require('../servicos/bcrypt');

const cadastroAluno = async (req, res) => {
  const { nome_sobrenome, usuario, email, senha, repita_senha } = req.body;

  if (senha != repita_senha) {
    return res.status(400).json({ mensagem: 'As senhas são diferentes.' });
  }

  const emailMinusculo = email.toLowerCase();

  try {
    const emailRegistrado = await emailExiste(emailMinusculo);
    if (emailRegistrado) {
      return res.status(400).json({ message: 'Email já registrado.' });
    }

    const usuarioRegistrado = await usuarioExiste(usuario);
    if (usuarioRegistrado) {
      return res.status(400).json({ message: 'Usuário já registrado.' });
    }

    const senhaCriptografada = await criptografarSenha(senha);

    const dadosAluno = {
      nome_sobrenome,
      usuario,
      email: emailMinusculo,
      senha: senhaCriptografada,
    };

    const alunoRegistrado = await registrarAluno(dadosAluno);
    if (!alunoRegistrado) {
      return res
        .status(400)
        .json({ message: 'Não foi possivel registrar sua conta.' });
    }

    return res.status(201).json(alunoRegistrado);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Erro interno do servidor.' });
  }
};

module.exports = { cadastroAluno };
