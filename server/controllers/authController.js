// server/controllers/authController.js
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { users, generateId } = require('../inMemoryStore');
const User = require('../models/User');

// Use environment variable for the JWT secret
const JWT_SECRET = process.env.JWT_SECRET || 'dK3j9Uf#P2x$mN7qR8t@Lw5zA1bC4vF6yH';

exports.register = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Validate input
    if (!username || !email || !password) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // Check if user already exists
    if (users.find(u => u.email === email)) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 12);

    // Create new user
    const newUser = new User(generateId(), username, email, hashedPassword);
    users.push(newUser);

    // Generate JWT
    const token = jwt.sign(
      { userId: newUser.id, email: newUser.email },  // Ensure consistency in token payload
      JWT_SECRET,
      { expiresIn: '1h' }
    );

    // Send response
    res.status(201).json({
      message: 'User created successfully',
      token,
      user: {
        id: newUser.id,
        username: newUser.username,
        email: newUser.email
      }
    });
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ message: 'Error in user registration' });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = users.find(u => u.email === email);
    
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    
    const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: '1h' });  // Ensure token has userId
    console.log('Generated token:', token);  // Log the generated token
    
    res.json({ token, message: 'Login successful' });  // Ensure token is in the response
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Error in user login' });
  }
};

exports.getProfile = (req, res) => {
  try {
    const userId = req.user.userId;  // Correctly access userId from the decoded token
    const user = users.find(u => u.id === userId);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json({
      id: user.id,
      username: user.username,
      email: user.email,
      // Add other non-sensitive user data here
    });
  } catch (error) {
    console.error('Get profile error:', error);
    res.status(500).json({ message: 'Error fetching user profile' });
  }
}; 
