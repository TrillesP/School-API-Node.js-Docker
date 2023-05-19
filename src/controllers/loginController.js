const loginService = require('../services/loginService');
const { createToken } = require('../utils/jwtAuth');

const logIn = async (req, res) => {
  try {
    const { email, password } = req.body;
    
    const user = await loginService.login({ email, password });
    // passo pro service porque preciso verificar se o email/senha estão corretos. A func login no service deve retornar true/false caso o email ou senha não estejam no db
    if (user === null) {
      return res.status(400).json({ message: 'Invalid fields' });
    }
    const token = createToken({ userId: user.id });

    return res.status(200).json({ token });
  } catch (error) {
    return res.status(500).json({ message: 'Internal Error', error: error.message });
  }
};

module.exports = {
  logIn,
};