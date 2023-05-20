const { verifyToken } = require('../utils/jwtAuth');

const tokenValidation = (req, res, next) => {
  try {
    const { authorization: token } = req.headers;
    if (!token) { return res.status(401).json({ message: 'Token not found' }); }

    const payload = verifyToken(token);
    req.teacher = payload;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = { tokenValidation };