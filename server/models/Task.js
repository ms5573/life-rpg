const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  title: { type: String, required: true },
  description: { type: String },
  category: { type: String, required: true },
  xpReward: { type: Number, required: true },
  repetitions: { type: Number, default: 1 },
  duration: { type: Number }, // in minutes
  deadline: { type: Date },
  completed: { type: Boolean, default: false },
});

module.exports = mongoose.model('Task', TaskSchema);