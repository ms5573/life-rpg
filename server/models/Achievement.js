// server/models/Achievement.js

class Achievement {
  constructor(id, name, description, condition) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.condition = condition;
  }
}

module.exports = Achievement;