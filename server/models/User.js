// server/models/User.js

class User {
  constructor(id, username, email, password) {
    this.id = id;
    this.username = username;
    this.email = email;
    this.password = password;
    this.avatar = 'default.png';
    this.stats = {
      strength: 1,
      endurance: 1,
      intelligence: 1,
      financialStatus: 1,
    };
    this.level = 1;
    this.xp = 0;
    this.achievements = [];
    this.createdAt = new Date();
  }
}

module.exports = User;