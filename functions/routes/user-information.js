const express = require('express');
const router = express.Router();
const uuid = require('uuid');
const userinformation = require('../resources/user-information.json');
require('dotenv').config();

const jwt = require('jsonwebtoken');

router.get('/', (req, res) => {
  res.send(userinformation);
});

router.post('/login', (req, res) => {
  const user = userinformation.find(u => u.username === req.body.username && u.password === req.body.password);
  console.log("Request Body:", req.body);
  if (user) {
    const accessToken = jwt.sign({ id: user.id }, process.env.ACCESS_TOKEN_SECRET, {
      expiresIn: '1h'
    });
    res.status(200).json({
      accessToken: accessToken,
      admin: user.admin,
      status: 200,
      message: 'Ok'
    });
  } else {
    res.status(401).json({ message: 'Authentication failed' });
  }
});

router.post('/register', (req, res) => {
  const userExists = userinformation.some(user => user.username === req.body.username);

  if (userExists) {
    return res.status(400).send({
      message: 'Username already taken',
      status: 400
    });
  }

  const newUser = {
    id: uuid.v4(),
    username: req.body.username,
    password: req.body.password,
    admin: false
  };

  userinformation.push(newUser);
  console.log(userinformation);

  res.status(200).send({
    message: 'User registered successfully',
    status: 200
  });
});

router.delete('/:id', (req, res) => {
  const id = req.params.id;
  const userIndex = userinformation.findIndex(user => user.id === id);

  if (userIndex !== -1) {
    userinformation.splice(userIndex, 1);
    res.status(200).json({
      message: 'User deleted',
      status: 200
    });
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});
module.exports = router;
