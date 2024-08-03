// server/utils/xpCalculator.js

function calculateXP(taskComplexity, repetitions) {
  const baseXP = 10; // Base XP for simplest task
  const complexityMultiplier = {
    easy: 1,
    medium: 2,
    hard: 3,
    expert: 5
  };

  return baseXP * complexityMultiplier[taskComplexity] * repetitions;
}

module.exports = calculateXP;