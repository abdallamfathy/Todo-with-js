
// Setting variables
let container = document.querySelector(".todo-container");
let input = document.querySelector(".add-task input");
let addButton = document.querySelector(".add-task span");
let noTaskMessage = document.querySelector(".tasks-content span");
let taskContainer = document.querySelector(".tasks-content")

// Make the focus on input
window.onload = function () {
    input.focus();
}

// Add task message
addButton.onclick = function () {
    // Check if input is empety
    if (input.value === "") {
        // Alert for empty input
        swal("please enter task!");
    } else {
        // Remove No task message after task is added
        noTaskMessage.remove();
        // Create Task Element
        let taskElement = document.createElement("span");
        // Create text node for task
        let taskText = document.createTextNode(input.value);
        // Add the text entered by user to the Task Element
        taskElement.appendChild(taskText);
        // Add class to the Task Element
        taskElement.className = 'task-box';
        // Create Delete button
        let deleteButton = document.createElement("span");
        // Create Text node for the button
        let deleteText = document.createTextNode("delete");
        // Add the text to button
        deleteButton.appendChild(deleteText);
        // Add class for delete button
        deleteButton.className = 'delete';
        // Add the button to Task Element
        taskElement.appendChild(deleteButton);
        // Add the Task Element to Task Container
        taskContainer.appendChild(taskElement);
        // Empty the input
        input.value = '';
        // Add focus again on input
        input.focus();
    }
};

// Add Event Listener for delete tasks
document.addEventListener("click",(e)=>{
    // Check if user clicked on delete button
    if (e.target.className === "delete") {
        // Remove the task when button clicked
        e.target.parentNode.remove();
    };
    // Check if target is task 
    if (e.target.classList.contains('task-box')) {
        // Finish the task when clicked
        e.target.classList.toggle("finished");
    };
})



