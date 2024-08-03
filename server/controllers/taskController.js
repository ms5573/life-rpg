// server/controllers/taskController.js

const { tasks, users } = require('../inMemoryStore');
const calculateXP = require('../utils/xpCalculator');

exports.completeTask = (req, res) => {
  const taskId = parseInt(req.params.id);
  const task = tasks.find(t => t.id === taskId);

  if (!task) {
    return res.status(404).json({ message: 'Task not found' });
  }

  if (task.userId !== req.userId) {
    return res.status(403).json({ message: 'Not authorized' });
  }

  const xpEarned = calculateXP(task.complexity, task.repetitions);
  const user = users.find(u => u.id === req.userId);

  // In taskController.js, after updating user XP and level

const checkAchievements = require('../utils/achievementChecker');
const newAchievements = checkAchievements(req.userId);

res.json({ message: 'Task completed', xpEarned, newLevel: user.level, newAchievements });

  user.xp += xpEarned;
  user.level = Math.floor(user.xp / 100) + 1; // Simple leveling system

  task.completed = true;

  res.json({ message: 'Task completed', xpEarned, newLevel: user.level });
};