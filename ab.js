document.addEventListener('DOMContentLoaded', () => {
  const addButton = document.getElementById('add-task-btn');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');

  let tasks = JSON.parse(localStorage.getItem('tasks') || '[]');

  // Function to add a new task to the list
  function addTask(taskText, save = true) {
      if (!taskText) {
          alert('Please enter a task before adding it.');
          return;
      }

      const taskLi = document.createElement('li');
      taskLi.textContent = taskText;

      const removeButton = document.createElement('button');
      removeButton.textContent = 'Remove';
      removeButton.classList.add('remove-btn');

      removeButton.addEventListener('click', () => {
          taskList.removeChild(taskLi);
          tasks = tasks.filter(task => task !== taskText);
          localStorage.setItem('tasks', JSON.stringify(tasks));
      });

      taskLi.appendChild(removeButton);
      taskList.appendChild(taskLi);

      if (save) {
          tasks.push(taskText);
          localStorage.setItem('tasks', JSON.stringify(tasks));
      }

      taskInput.value = '';
  }

  // Event listener for adding a task when the button is clicked
  addButton.addEventListener('click', () => {
      addTask(taskInput.value);
  });

  // Event listener for adding a task when the "Enter" key is pressed in the input field
  taskInput.addEventListener('keypress', (event) => {
      if (event.key === 'Enter') {
          event.preventDefault();
          addTask(event.target.value);
      }
  });

  // Function to load tasks from Local Storage when the page loads
  function loadTasks() {
      tasks.forEach(taskText => {
          addTask(taskText, false); // 'false' to avoid saving to Local Storage again
      });
  }

  loadTasks();
});