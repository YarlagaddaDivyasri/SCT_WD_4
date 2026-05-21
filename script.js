const addBtn = document.getElementById("addBtn");
const taskInput = document.getElementById("taskInput");
const dateInput = document.getElementById("dateInput");
const timeInput = document.getElementById("timeInput");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", () => {

    const taskText = taskInput.value.trim();
    const taskDate = dateInput.value;
    const taskTime = timeInput.value;

    if (taskText === "") {
        alert("Please enter a task");
        return;
    }

    const li = document.createElement("li");

    const taskTop = document.createElement("div");
    taskTop.classList.add("task-top");

    const taskName = document.createElement("span");
    taskName.innerText = taskText;

    taskTop.appendChild(taskName);

    const dateTime = document.createElement("div");
    dateTime.classList.add("date-time");
    dateTime.innerText = taskDate + " " + taskTime;

    const buttonSection = document.createElement("div");
    buttonSection.classList.add("task-buttons");

    const completeBtn = document.createElement("button");
    completeBtn.innerText = "Complete";

    completeBtn.addEventListener("click", () => {
        taskName.classList.toggle("completed");
    });

    const editBtn = document.createElement("button");
    editBtn.innerText = "Edit";

    editBtn.addEventListener("click", () => {

        const updatedTask = prompt("Edit task", taskName.innerText);

        if (updatedTask !== null && updatedTask.trim() !== "") {
            taskName.innerText = updatedTask;
        }

    });

    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";

    deleteBtn.addEventListener("click", () => {
        li.remove();
    });

    buttonSection.appendChild(completeBtn);
    buttonSection.appendChild(editBtn);
    buttonSection.appendChild(deleteBtn);

    li.appendChild(taskTop);
    li.appendChild(dateTime);
    li.appendChild(buttonSection);

    taskList.appendChild(li);

    taskInput.value = "";
    dateInput.value = "";
    timeInput.value = "";
});