const mongoose = require('mongoose');

const QuestSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  title: { type: String, required: true },
  description: { type: String },
  subquests: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Task' }],
  deadline: { type: Date },
  completed: { type: Boolean, default: false },
});

module.exports = mongoose.model('Quest', QuestSchema);