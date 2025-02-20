let tasks = [];
 
function addTask() {
    const taskInput = document.getElementById('taskInput');
    if (taskInput.value.trim() !== "") {
        const newTask = {
            description: taskInput.value,
            status: 'TO-DO'
        };
        tasks.push(newTask);
        taskInput.value = ""; // Clear input field
        renderTasks();
    }
}
 
function renderTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = ""; // Clear existing tasks
 
    tasks.forEach((task, index) => {
        const taskElement = document.createElement('li');
        taskElement.className = 'task';
 
        // Task description and status
        taskElement.innerHTML = `
<span>${task.description} [${task.status}]</span>
<div>
<button onclick="changeStatus(${index}, 'next')">Next Status</button>
<button onclick="editTask(${index})">Edit</button>
<button onclick="archiveTask(${index})">Archive</button>
</div>
        `;
        taskList.appendChild(taskElement);
    });
}
 
function changeStatus(index, direction) {
    const task = tasks[index];
    if (task.status === 'TO-DO' && direction === 'next') {
        task.status = 'In-Progress';
    } else if (task.status === 'In-Progress' && direction === 'next') {
        task.status = 'Done';
    }
    renderTasks();
}
 
function editTask(index) {
    const newDescription = prompt("Edit task description", tasks[index].description);
    if (newDescription !== null) {
        tasks[index].description = newDescription;
        renderTasks();
    }
}
 
function archiveTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}
 
window.onload = function() {
    renderTasks();
};