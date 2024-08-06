document.addEventListener("DOMContentLoaded", () => {
  const taskInput = document.getElementById("taskInput");
  const addTaskBtn = document.getElementById("addTaskBtn");
  const taskList = document.getElementById("taskList");
  const h4 = document.querySelector("#notification");
  const hr = document.querySelector("hr");

  // Function to add a new task
  function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
      const listItem = document.createElement("li");
      listItem.className = "taskItem";

      const taskSpan = document.createElement("span");
      taskSpan.textContent = taskText;

      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "Delete";
      deleteBtn.className = "deleteBtn";
      deleteBtn.onclick = () => {
        taskList.removeChild(listItem);
        updateNotification("Task removed successfully");
      };

      listItem.appendChild(taskSpan);
      listItem.appendChild(deleteBtn);
      taskList.appendChild(listItem);

      hr.style.display = "block";

      taskInput.value = "";
      updateNotification("Your task was added successfully", "Green");
    } else {
      updateNotification("Input field cannot be empty", "red");
    }
  }

  // Function to update the notification text
  function updateNotification(message, color) {
    h4.textContent = message;
    h4.style.color = color;
    h4.style.transition = "message 3.3s ease-in-out";
  }

  // Add task on button click
  addTaskBtn.addEventListener("click", addTask);

  // Add task on Enter key press
  taskInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      addTask();
    }
  });
});
