const Task = require("../models/Task");

const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.status(200).json({ tasks });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
const postTasks = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
const getTasks = async (req, res) => {
  try {
    //TODO: What if id is not there in req.params?
    const { id: taskID } = req.params;
    const task = await Task.findOne({ _id: taskID });
    if (!task) {
      res.status(404).json({ msg: `no task found with id : ${taskID}` });
    }
    res.status(200).json({ task });
  } catch (error) {
    res.status(200).json({ msg: error });
  }
};
const updateTasks = async (req, res) => {
  try {
    const taskID = req.params.id;
    const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
      new: true,
      runValidators: true,
    });
    if (!task) {
      res.status(404).json({ msg: `no task with id ${taskID}` });
    }

    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
const deleteTasks = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOneAndDelete({ _id: taskID });
    if (!task) {
      return res.status(404).json({ msg: `No task with id ${taskID}` });
    }
    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

module.exports = { getAllTasks, postTasks, getTasks, updateTasks, deleteTasks };
