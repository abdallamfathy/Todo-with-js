
// Setting variables
let container = document.querySelector(".todo-container");
let input = document.querySelector(".add-task input");
let addButton = document.querySelector(".add-task span");
let taskContainer = document.querySelector(".tasks-content");
let tasksCount = document.querySelector(".tasks-count span");
let tasksCompleted = document.querySelector(".tasks-completed span");

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
        // Get task massage span
        let noTaskMessage = document.querySelector(".no-tasks-message");
        // Check if Message exists before remove
        if (document.body.contains(document.querySelector(".no-tasks-message"))) {
            // Remove No task message after task is added
            noTaskMessage.remove();
        }

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
        // Trigger calculate function
        calculate();
    }
};

// Add Event Listener for delete tasks
document.addEventListener("click",(e)=>{
    // Check if user clicked on delete button
    if (e.target.className === "delete") {
        // Remove the task when button clicked
        e.target.parentNode.remove();
    };
    // Check Number Of Tasks Inside The Container
    if (taskContainer.childElementCount == 0) {

        createMsg();
  
      }

    // Check if target is task 
    if (e.target.classList.contains('task-box')) {
        // Finish the task when clicked
        e.target.classList.toggle("finished");
    };
    // Trigger calculate function
    calculate();
});

// Create function to add "NO task message"
function createMsg() {
    // Create span for message
     let spanMsg = document.createElement('span');
     // Create text for the spanMsg
     let spanMsgText = document.createTextNode("There is no tasks to show");
     // Add the text to spanMsg
     spanMsg.appendChild(spanMsgText);
     // Add className for the spanMsg
     spanMsg.className = "no-tasks-message";
     // Add the message to task container
     taskContainer.appendChild(spanMsg);
};

function calculate() {
    // Add count of tasks 
     tasksCount.innerHTML = document.querySelectorAll(".tasks-content .task-box").length;
     // Add count of finished tasks
     tasksCompleted.innerHTML = document.querySelectorAll(".tasks-content .finished").length;
}



