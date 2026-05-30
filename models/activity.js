const mongoose = require('mongoose');

const activitySchema = new mongoose.Schema({
  activity_id: {
    type: String,
    required: true,
    unique: true
  },
  todo_description: {
    type: String,
    required: true
  }
});

const Activity = mongoose.model('Activity', activitySchema);

module.exports = Activity;