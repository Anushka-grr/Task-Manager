require("dotenv").config();
const express = require("express");
const app = express();

const tasks = require("./routes/tasks");
const connectDB = require("./db/connect");

app.use(express.static("./public"));
app.use(express.json());
app.use("/api/v1/tasks", tasks);

// app.get('api/v1/tasks') -get all the tasks
// app.post('api/v1/tasks') -post all the tasks
// app.get('api/v1/tasks/:id') - get one task
// app.patch('api/v1/tasks/:id') - update task
// app.delete('api/v1/tasks/:id') - delete task

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    const port = 5000;
    app.listen(port, console.log(`server is listening on port ${port}`));
  } catch (error) {
    console.log(error);
  }
};

start();
