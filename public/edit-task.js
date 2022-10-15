editTaskIDDOM = document.querySelector(".task-edit-id");
editTaskNameDOM = document.querySelector(".task-edit-name");
editTaskCompletedDOM = document.querySelector(".task-edit-completed");
formAlertDOM = document.querySelector(".form-alert");
formDOM = document.querySelector(".single-task-form");
//getting task id value from url
const arr_str = window.location.href.toString();
const arr = arr_str.split("=");
const id = arr[arr.length - 1];
const showTask = async () => {
  console.log(arr);
  const {
    data: { task },
  } = await axios.get(`api/v1/tasks/${id}`);
  console.log(task);
  const { _id: taskID, name, completed } = task;
  console.log(taskID);
  //assigns name , checked, and id to the task
  editTaskIDDOM.innerHTML = `<p>${taskID}</p>`;
  editTaskNameDOM.value = name;
  editTaskCompletedDOM.checked = completed;
};
showTask();
//on clicking edit button
formDOM.addEventListener("submit", async (e) => {
  e.preventDefault();
  const name = editTaskNameDOM.value;
  const checked = editTaskCompletedDOM.checked;
  //Posting the edited task
  try {
    await axios.patch(`/api/v1/tasks/${id}`, {
      name: name,
      completed: checked,
    });
    //Sending a success alert
    formAlertDOM.innerHTML =
      "<p class='alert-success'>Success Task Added!!</p>";
    setTimeout(() => {
      formAlertDOM.innerHTML = "";
    }, 2000);
  } catch (error) {
    //Error alert
    formAlertDOM.innerHTML = `<p class='text-danger'> Error, please try again</p>`;
  }
});
