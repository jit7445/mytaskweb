const newtaskInput = document.getElementById('newtask');
const tasklist = document.getElementById('tasklist');

// Load tasks from local storage when the page loads
loadTasks();

function addTask() {
  const todaytask = newTaskInput.value.trim();

  if (todaytask === '') {
    alert('Please enter a task.');
    return;
  }

  // Create the list item
  const listItem = document.createElement('li');
  listItem.innerHTML = `
    <span>${todaytask}</span>
    <button class="delete-button" onclick="deleteTask(this)">Delete</button>
  `;

  // Add it to the task list
  tasklist.appendChild(listItem);

  // Clear the input field
  newTaskInput.value = '';

  // Store the task in local storage
  storeTasks();
}

function deleteTask(button) {
  const listItem = button.parentElement;
  tasklist.removeChild(listItem);
  storeTasks(); // Update local storage after deletion
}

function storeTasks() {
  const tasks = Array.from(tasklist.children)
    .map(task => task.querySelector('span').textContent);
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasks() {
  const storedTasks = localStorage.getItem('tasks');
  if (storedTasks) {
    const tasks = JSON.parse(storedTasks);
    tasks.forEach(task => {
      const listItem = document.createElement('li');
      listItem.innerHTML = `
        <span>${task}</span>
        <button class="delete-button" onclick="deleteTask(this)">Delete</button>
      `;
      tasklist.appendChild(listItem);
    });
  }
}
