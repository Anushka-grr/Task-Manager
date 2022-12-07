const express = require("express");
const router = express.Router();

const {
  getAllTasks,
  postTasks,
  getTasks,
  updateTasks,
  deleteTasks,
} = require("../controller/tasks");

router.route("/").get(getAllTasks).post(postTasks);
router.route("/:id").get(getTasks).patch(updateTasks).delete(deleteTasks);

module.exports = router;
