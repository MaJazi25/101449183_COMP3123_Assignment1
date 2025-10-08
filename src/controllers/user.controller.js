const bcrypt = require('bcrypt');
const User = require('../models/User');

// Create new user
exports.signup = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ $or: [{ email }, { username }] });
    if (existingUser) {
      return res.status(409).json({ status: false, message: 'User already exists' });
    }

    // Create and save user
    const newUser = new User({ username, email, password });
    await newUser.save();

    res.status(201).json({
      message: 'User created successfully.',
      user_id: newUser._id
    });
  } catch (error) {
    res.status(500).json({ status: false, message: error.message });
  }
};

// User login
exports.login = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const user = await User.findOne({
      $or: [{ email: email || null }, { username: username || null }]
    });

    if (!user) {
      return res.status(401).json({ status: false, message: 'Invalid Username and password' });
    }

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) {
      return res.status(401).json({ status: false, message: 'Invalid Username and password' });
    }

    res.status(200).json({ message: 'Login successful.' });
  } catch (error) {
    res.status(500).json({ status: false, message: error.message });
  }
};
