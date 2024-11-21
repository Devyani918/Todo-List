function addTask() {
  var taskInput = document.getElementById('task')
  var dueDateInput = document.getElementById('dueDate')
  var taskText = taskInput.value.trim();
  var dueDateInput = dueDateInput.value;

  if(taskText !== ''){
      var taskList = document.getElementById('taskList')
      var newTask = document.createElement('li')
      newTask.innerHTML = `
      ${taskText}(Due: ${dueDateInput})
      <button onclick="removeTask(this)">delete</button>`
      taskList.appendChild(newTask)
       taskInput.value = ''
       dueDateInput = ''
  }
 }
 function removeTask(button){
  var taskItem = button.parentElement;
  taskItem.remove();
 }