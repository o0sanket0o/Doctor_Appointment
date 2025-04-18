const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User.js');

// User Registration
exports.register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // console.log(name, email, password);

    let user = await User.findOne({ email });
    if (user) return res.status(400).json({ message: 'User already exists' });

    const hashedPassword = await bcrypt.hash(password, 10);

    user = new User({ name, email, password: hashedPassword });
    await user.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error });
  }
};

// User Login
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;


    const user = await User.findOne({ email });
    // console.log("We found", user);
    if (!user) return res.status(400).json({ message: 'Invalid credentials' });

    // const isMatch = bcrypt.compare(password, user.password.toString());
    const isMatch = await bcrypt.compare(password, user.password);

    
    if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.status(200).json({ token, user: { id: user._id, name: user.name, email: user.email } });
  
  } catch (error) {
  
    res.status(500).json({ message: 'Server Error', error });
  
  }
};

// Get User Profile
exports.getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    if (!user) return res.status(404).json({ message: 'User not found' });

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error });
  }
};

// User Logout
exports.logout = (req, res) => {
  res.status(200).json({ message: 'Logged out successfully' });
};
