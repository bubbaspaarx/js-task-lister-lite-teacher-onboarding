    const list = document.getElementById('tasks')

class TaskList {

  addNewTask(task){
    const taskItem = document.createElement('li')
    taskItem.innerText = task.description
    taskItem.id = task.id
    taskItem.innerHTML += `   <button data-description="${task.id}">X</button>`
    list.append(taskItem)
  }

  deleteTask(id){
    const allTasks = document.querySelectorAll('#tasks li')
    allTasks.forEach(task => {
      if(id === task.id.toString()) {
      task.remove()
      }
    })

  }
}
