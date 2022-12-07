const tasksDOM = document.querySelector(".tasks");
const taskInputDOM = document.querySelector(".task-input");
const formAlertDOM = document.querySelector(".form-alert");
const loadingDOM = document.querySelector(".loading-text");
const formDOM = document.querySelector(".task-form");

// Shows all tasks
const showTasks = async () => {
  loadingDOM.style.visibiliy = "visible";

  // Force wait for 2s to check if the loading text is visible. Impements promise.
  /**
   * The below function creates a new promise and awaits untill it is resolved.
   * To forcefully wait for 2 second, what we do is we add a timeOut for 2 seconds and resolve the promise once the timeout is completed. (in this exmaple timeout is 2s)
   */
  // await new Promise((res, rej) => {
  //   setTimeout(() => {
  //     res("ok");
  //   }, 2000);
  // });
  try {
    // Fetch latest tasks from api
    const {
      data: { tasks },
    } = await axios.get("/api/v1/tasks");

    if (tasks.length < 1) {
      tasksDOM.innerHTML = "<h4>NO TASKS ADDED</h4>";
      loadingDOM.style.visibiliy = "hidden";
      return;
    }

    const all = tasks
      .map((task) => {
        const { _id: taskID, completed, name } = task;
        return `<div class="single-task ${completed && "task-completed"}">
      <h5><span><i class="far fa-check-circle"></i></span>${name}</h5>
      <div class="task-links">
      <!-- edit link -->
      <a href="task.html?id=${taskID}"  class="edit-link">
      <i class="fas fa-edit"></i>
      </a>
      <!-- delete btn -->
      <button type="button" class="delete-btn" data-id="${taskID}">
      <i class="fas fa-trash"></i>
      </button>
      </div>
      </div>`;
      })
      .join("");

    tasksDOM.innerHTML = all;

    // Once the task is fetched, we create a dom element for each task.

    const delBtn = document.querySelectorAll(".delete-btn");

    delBtn.forEach((btn) => {
      btn.addEventListener("click", async (e) => {
        const dataId = btn.getAttribute("data-id");
        await axios.delete(`api/v1/tasks/${dataId}`);

        showTasks();
      });
    });
  } catch (error) {
    //TODO: In nested destructure what if parent key is undefined?
    // eg:- if data is undefined than what happens when we try to destructure tasks from data?
    const {
      data: { tasks },
    } = await axios.get("/api/v1/tasks");
    tasksDOM.innerHTML = `<h4>Please try again later</h4>`;
  }
};
showTasks();

//submit task
formDOM.addEventListener("submit", async (e) => {
  e.preventDefault();
  const taskname = taskInputDOM.value;
  //todo add a try catch block to handle axios errors
  if (!taskname) {
    return (formAlertDOM.innerHTML = " ENTER SOME TASKS");
    //todo settimeout for the alert
  }

  await axios.post("api/v1/tasks", {
    name: taskname,
    completed: "false",
  });
  taskInputDOM.value = "";
  showTasks();
});

//deletetask

// tasksDOM.addEventListener("click", async (e) => {
//   const el = e.target;
//   if (el.parentElement.classList.contains("delete-btn")) {
//     //data-id
//     const taskId = el.parentElement.getAttribute("data-id");
//     const {
//       data: { tasks },
//     } = await axios.delete(`api/v1/tasks/${taskId}`);
//     showTasks();
//   }
// });

//
