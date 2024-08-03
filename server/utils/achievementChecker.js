// server/utils/achievementChecker.js

const { users } = require('../inMemoryStore');
const achievements = require('../data/achievements');

function checkAchievements(userId) {
  const user = users.find(u => u.id === userId);
  const newAchievements = [];

  achievements.forEach(achievement => {
    if (!user.achievements.includes(achievement.id) && achievement.condition(user)) {
      user.achievements.push(achievement.id);
      newAchievements.push(achievement);
    }
  });

  return newAchievements;
}

module.exports = checkAchievements;