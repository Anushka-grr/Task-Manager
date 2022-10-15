const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "name cannot be empty"],
    trim: true,
    maxlength: [20, "use upto 20 characters only"],
  },
  completed: {
    type: Boolean,
    //default: false
  },
});

module.exports = mongoose.model("Task", TaskSchema);
