const taskList = document.getElementById("taskList");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskTitleInput = document.getElementById("taskTitle");
const taskDeadlineInput = document.getElementById("taskDeadline");
const taskNotesInput = document.getElementById("taskNotes");

function formatDeadline(deadline) {
    if (!deadline) return "None";
    const [date, time] = deadline.split("T");
    return `${date} ${time}`;
}

addTaskBtn.addEventListener("click", () => {
    const taskTitle = taskTitleInput.value.trim();
    const taskDeadline = taskDeadlineInput.value;
    const taskNotes = taskNotesInput.value.trim();

    if (!taskTitle) return;

    const listItem = document.createElement("li");

    const title = document.createElement("div");
    title.className = "task-title";
    title.textContent = taskTitle;
    listItem.appendChild(title);

    const deadline = document.createElement("div");
    deadline.className = "deadline";
    deadline.textContent = `Deadline: ${formatDeadline(taskDeadline)}`;
    listItem.appendChild(deadline);

    const notes = document.createElement("div");
    notes.className = "notes";
    notes.textContent = taskNotes;
    listItem.appendChild(notes);

    const removeBtn = document.createElement("span");
    removeBtn.className = "remove";
    removeBtn.innerHTML = "&times;";
    removeBtn.addEventListener("click", () => {
        taskList.removeChild(listItem);
    });
    listItem.appendChild(removeBtn);

    const editBtn = document.createElement("span");
    editBtn.className = "edit";
    editBtn.innerHTML = "&#x270E;";
    editBtn.addEventListener("click", () => {
        taskTitleInput.value = taskTitle;
        taskDeadlineInput.value = taskDeadline;
        taskNotesInput.value = taskNotes;
        taskList.removeChild(listItem);
    });
    listItem.appendChild(editBtn);

    taskList.appendChild(listItem);

    taskTitleInput.value = "";
    taskDeadlineInput.value = "";
    taskNotesInput.value = "";
});
