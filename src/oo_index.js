
document.addEventListener("DOMContentLoaded", () => {
  const taskList = new TaskList();
  const input = document.getElementById('new-task-description')
  const submitBtn = document.getElementById('submitBtn')
  let deleteBtns = []



  submitBtn.addEventListener('click', event => {
    event.preventDefault()
    newTask = new Task(input.value, taskList)
    taskList.addNewTask(newTask)
    deleteBtns = document.querySelectorAll('button')
    deleteBtns.forEach(btn => {
      btn.addEventListener('click', event => {
        event.preventDefault()
        taskList.deleteTask(btn.dataset.description)
      })
    })
  })


});
