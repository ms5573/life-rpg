// server/data/achievements.js

const Achievement = require('../models/Achievement');

const achievements = [
  new Achievement(1, 'Task Master', 'Complete 10 tasks', user => user.completedTasks >= 10),
  new Achievement(2, 'Level Up', 'Reach level 5', user => user.level >= 5),
  new Achievement(3, 'Streak Keeper', 'Complete tasks for 7 consecutive days', user => user.streak >= 7),
];

module.exports = achievements;