function User(username, password) {
  this.username = username;
  this.password = password;
}

User.prototype.checkPassword = function checkPassword(password) {
  if (this.password == password) {
    return true;
  } else {
    return false;
  }
};

export { User };
