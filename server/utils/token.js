const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET;

const generate = req => {
  return jwt.sign(
    {
      auth: 'magic',
      agent: req.headers['user-agent'],
      exp: Math.floor(new Date().getTime() / 1000) + 7 * 24 * 60 * 60
    },
    JWT_SECRET
  );
};

const verify = token => {
  let decoded = false;

  try {
    decoded = jwt.verify(token, JWT_SECRET);
  } catch (e) {
    decoded = false;
  }

  return decoded;
};

const validate = (req, res) => {
  const token = req.headers.authorization;
  const decoded = verify(token);

  if (!decoded || !decoded.auth) {
    // Fail
  } else {
    // Success
  }
};

module.exports = {
  generate,
  verify,
  validate
};
