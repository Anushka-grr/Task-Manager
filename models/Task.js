const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "name cannot be empty"],
    // trim: true,
    maxlength: [20, "use upto 20 characters only"],
    trim: true,
  },
  completed: {
    type: Boolean,
  },
});

module.exports = mongoose.model("Task", TaskSchema);
