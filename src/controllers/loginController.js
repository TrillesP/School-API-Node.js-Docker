const loginService = require('../services/loginService');
const { createToken } = require('../utils/jwtAuth');

const logIn = async (req, res) => {
  try {
    const { email, password } = req.body;
    
    const teacher = await loginService.logIn({ email, password });
    if (teacher === null) {
      return res.status(400).json({ message: 'Wrong email or password' });
    }
    const token = createToken({ teacherId: teacher.id });

    return res.status(200).json({ token });
  } catch (error) {
    return res.status(500).json({ message: 'Internal Error', error: error.message });
  }
};

module.exports = {
  logIn
};