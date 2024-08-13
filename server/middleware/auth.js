// server/middleware/auth.js
const admin = require('firebase-admin');

const authMiddleware = async (req, res, next) => {
  console.log('Auth middleware called');
  const authHeader = req.header('Authorization');
  console.log('Auth header:', authHeader);

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    console.log('No token provided');
    return res.status(401).json({ message: 'No token, authorization denied' });
  }

  const idToken = authHeader.split('Bearer ')[1];
  console.log('Extracted token:', idToken);

  try {
    const decodedToken = await admin.auth().verifyIdToken(idToken);
    console.log('Decoded token:', decodedToken);
    req.user = decodedToken.uid;
    next();
  } catch (err) {
    console.error('Token verification failed:', err);
    res.status(401).json({ message: 'Token is not valid' });
  }
};

module.exports = authMiddleware;