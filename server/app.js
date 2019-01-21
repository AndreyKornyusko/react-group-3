require('dotenv').config();

const express = require('express');
const corsMiddlware = require('cors');
const userDb = require('./utils/db');
const token = require('./utils/token');

const app = express();

app.use(express.json());
app.use(corsMiddlware());

app.post('/auth/signup', (req, res) => {
  const { login, email, password } = req.body;

  userDb
    .add({ login, email, password })
    .then(({ id, login, email }) => {
      res.status(201).json({
        id,
        login,
        email,
        token: token.generate(req)
      });
    })
    .catch(error => {
      res.status(409).json({
        message: error
      });
    });
});

app.post('/auth/signin', (req, res) => {
  const { email, password } = req.body;

  userDb
    .find(email, password)
    .then(({ id, login, email }) => {
      res.status(200).json({
        id,
        login,
        email,
        token: token.generate(req)
      });
    })
    .catch(error => {
      res.status(404).json({
        message: error
      });
    });
});

app.post('/auth/logout', (req, res) => {
  const t = req.headers.authorization;
  const decoded = token.verify(t);

  if (decoded) {
    // Все классно, удаляем токен из редиски или leveldb или еще откуда
    res.status(200).json({
      message: 'Logout success'
    });
  } else {
    // Токен не валидный, отправляем репорт опсам чтобы разобрались кто пытался кинуть нам грязный токен
    res.status(500).json({
      message: 'Gachi is manly!'
    });
  }
});

app.listen(4040, () => {
  console.log('Server is listening on port 4040');
});
