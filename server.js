const express = require('express');
const app = express();

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

const users = [];

// Sign up route
app.post('/signup', (req, res) => {
  const { username, password } = req.body;
  const user = users.find(user => user.username === username);
  if (user) {
    res.status(409).json({ message: 'Username already taken' });
  } else {
    const newUser = { username, password };
    users.push(newUser);
    res.status(201).json({ message: 'User created successfully' });
  }
});

// Login route
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find(user => user.username === username && user.password === password);
  if (user) {
    res.status(200).json({ message: 'Login successful' });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});
