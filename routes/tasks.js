const express = require('express')
const router = express.Router();

const {getAllTasks,postTasks,getTasks,updateTasks,deleteTasks} = require('../controller/tasks')

router.route('/').get(getAllTasks).post(postTasks)
router.route('/:id').get(getTasks).patch(updateTasks).delete(deleteTasks)


module.exports= router

// app.get('api/v1/tasks') -get all the taska
// app.post('api/v1/tasks') -post all the tasks
// app.get('api/v1/tasks/:id') - get one task
// app.patch('api/v1/tasks/:id') - update task
// app.delete('api/v1/tasks/:id') - delte task