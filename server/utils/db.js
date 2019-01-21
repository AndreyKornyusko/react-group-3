const shortid = require('shortid');

const userDb = [];

const isUnique = email => !userDb.find(user => user.email === email);

const find = (email, password) => {
  const user = userDb.find(
    user => user.email === email && user.password === password
  );

  return user ? Promise.resolve(user) : Promise.reject('User not found');
};

const add = ({ login, email, password }) => {
  if (!isUnique(email)) {
    return Promise.reject('User with this email already exists');
  }

  const user = {
    id: shortid.generate(),
    login,
    email,
    password
  };

  userDb.push(user);

  return Promise.resolve(user);
};

module.exports = {
  add,
  find
};
