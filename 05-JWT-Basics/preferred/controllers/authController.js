const jwt = require('jsonwebtoken');

// replace with real DB lookup
const user = { name: 'testUser', password: 'testPassword' };

const login = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: 'Please provide username and password' });
  }

  if (username !== user.name || password !== user.password) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  // Generate JWT
  const id = new Date().getDate(); // Use a real identifier from DB
  const token = jwt.sign({ id, username }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_LIFETIME });

  res.status(200).json({ msg: 'User logged in', token });
};

module.exports = {
  login,
};
