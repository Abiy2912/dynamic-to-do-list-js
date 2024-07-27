// Step 1: Setup Event Listener 
document.addEventListener('DOMContentLoaded', () => {
    // Step 2:  DOM Elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
    
    // Step 3: addTask Function
    function addTask() {
    
        const taskText = taskInput.value.trim();
        
        // Check if task text is not empty
        if (taskText !== '') {
        
            const newLi = document.createElement('li');
            newLi.textContent = taskText;
            
            // Create new remove button element
            const removeButton = document.createElement('button');
            removeButton.textContent = 'Remove';
            removeButton.classList.add('remove-btn');
            
            // Setup remove button event listener
            removeButton.addEventListener('click', () => {
                taskList.removeChild(newLi);
            });
            
            // Append remove button to the li element
            newLi.appendChild(removeButton);
            
            // Append the new task to the task list
            taskList.appendChild(newLi);
            
            // Clear the task input field
            taskInput.value = '';
        } else {
            alert('Please enter a task.');
        }
    }
    
    // Step 4: Attach Event Listeners
    
    addButton.addEventListener('click', addTask);
    
    // Add event listener to taskInput for Enter key presses
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            addTask();
        }
    });
    
    // call addTask function on DOMContentLoaded
    addTask();
});