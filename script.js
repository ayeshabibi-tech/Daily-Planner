window.onload = function () {
    // No saved data (simple project)
};

/* 📝 TO-DO */

function addTask() {
    let input = document.getElementById("taskInput");
    let task = input.value.trim();

    if (task === "") {
        alert("Please enter a task!");
        return;
    }

    createTask(task);
    input.value = "";
}

function createTask(task) {
    let li = document.createElement("li");
    li.className = "list-group-item d-flex justify-content-between align-items-center";

    li.innerHTML = `
        <span onclick="toggleTask(this)">${task}</span>
        <button class="btn btn-danger btn-sm" onclick="deleteTask(this)">X</button>
    `;

    document.getElementById("taskList").appendChild(li);
}

function toggleTask(task) {
    task.classList.toggle("completed");
}

function deleteTask(btn) {
    btn.parentElement.remove();
}

/* 🕌 PRAYER TRACKER */

function togglePrayer(btn) {
    btn.classList.toggle("btn-outline-dark");
    btn.classList.toggle("btn-custom");
    btn.parentElement.classList.toggle("done");
}