document.addEventListener('DOMContentLoaded', function () {
    const newTaskInput = document.getElementById('newTask');
    const taskList = document.getElementById('taskList');
  
    function addTask() {
      const todaytask = newTaskInput.value.trim();
  
      if (todaytask === '') {
        alert('Please enter a task.');
        return;
      }
  
      const listItem = document.createElement('li');
      listItem.innerHTML = `
        <span>${todaytask}</span>
        <button class="delete-button" onclick="deleteTask(this)">Delete</button>
       
      `;
  
      taskList.appendChild(listItem);
      newTaskInput.value = '';
    }
  
    window.addTask = addTask; 
    function deleteTask(button) {
      const listItem = button.parentElement;
      taskList.removeChild(listItem);
    }
  
    window.deleteTask = deleteTask; 
  });
  