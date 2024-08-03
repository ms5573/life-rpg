const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  console.log('Auth middleware called');
  const authHeader = req.header('Authorization');
  console.log('Auth header:', authHeader);

  const token = authHeader?.replace('Bearer ', '');
  console.log('Extracted token:', token);

  if (!token) {
    console.log('No token provided');
    return res.status(401).json({ message: 'No token, authorization denied' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log('Decoded token:', decoded);
    req.user = decoded.userId;
    next();
  } catch (err) {
    console.error('Token verification failed:', err);
    res.status(401).json({ message: 'Token is not valid' });
  }
};

module.exports = authMiddleware;