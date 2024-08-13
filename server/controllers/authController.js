// server/controllers/authController.js
const admin = require('firebase-admin');

exports.verifyToken = async (req, res) => {
  const { idToken } = req.body;

  try {
    const decodedToken = await admin.auth().verifyIdToken(idToken);
    const uid = decodedToken.uid;
    // Here you can fetch additional user data from your database if needed
    res.json({ uid, message: 'Token verified successfully' });
  } catch (error) {
    console.error('Error verifying token:', error);
    res.status(401).json({ message: 'Invalid token' });
  }
};