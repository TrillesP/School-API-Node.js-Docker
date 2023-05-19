const loginService = require('../services/loginService');
const { createToken } = require('../utils/jwtAuth');

const logIn = async (req, res) => {
  try {
    const { email, password } = req.body;
    
    const teacher = await loginService.login({ email, password });
    // service deve retornar true/false caso o email ou senha não estejam no db
    if (teacher === null) {
      return res.status(400).json({ message: 'Invalid fields' });
    }
    const token = createToken({ teacherId: teacher.id });

    return res.status(200).json({ token });
  } catch (error) {
    return res.status(500).json({ message: 'Internal Error', error: error.message });
  }
};

module.exports = {
  logIn,
};