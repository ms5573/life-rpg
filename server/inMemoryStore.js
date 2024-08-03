// server/inMemoryStore.js

let users = [];
let tasks = [];
let quests = [];
let nextId = 1;

function generateId() {
  return nextId++;
}

module.exports = {
  users,
  tasks,
  quests,
  generateId
};