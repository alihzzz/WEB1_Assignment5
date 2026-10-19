let tasks = [];

const todoForm = document.getElementById("todoForm");
const taskTitleInput = document.getElementById("taskTitle");
const taskDescInput = document.getElementById("taskDesc");
const tasksListContainer = document.getElementById("tasksList");
const emptyMessage = document.getElementById("emptyMessage");

todoForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const titleText = taskTitleInput.value.trim();
    const descText = taskDescInput.value.trim();

    if (titleText === "" || descText === "") {
        alert("Пожалуйста, заполните оба поля!");
        return;
    }

    const newTask = {
        id: Date.now(),
        title: titleText,
        description: descText,
        completed: false
    };

    tasks.push(newTask);

    taskTitleInput.value = "";
    taskDescInput.value = "";

    renderTasks();
});

function renderTasks() {
    tasksListContainer.innerHTML = "";

    if (tasks.length === 0) {
        tasksListContainer.appendChild(emptyMessage);
        return;
    }

    tasks.forEach(function (task) {
        const taskCard = document.createElement("div");
        taskCard.className = `task-card ${task.completed ? "completed" : ""}`;

        taskCard.innerHTML = `
            <div class="task-header">
                <span class="task-title" onclick="toggleTask(${task.id})">${escapeHtml(task.title)}</span>
                <div class="task-actions">
                    <span class="btn-check" onclick="toggleTask(${task.id})" title="Отметить выполненной">
                        ${task.completed ? "✓" : "◯"}
                    </span>
                    <span class="btn-delete" onclick="deleteTask(${task.id})" title="Удалить задачу">✕</span>
                </div>
            </div>
            <div class="task-desc">${escapeHtml(task.description)}</div>
        `;

        tasksListContainer.appendChild(taskCard);
    });
}

function toggleTask(id) {
    tasks = tasks.map(function (task) {
        if (task.id === id) {
            return { ...task, completed: !task.completed };
        }
        return task;
    });
    renderTasks();
}

function deleteTask(id) {
    tasks = tasks.filter(function (task) {
        return task.id !== id;
    });
    renderTasks();
}

function escapeHtml(text) {
    const div = document.createElement("div");
    div.textContent = text;
    return div.innerHTML;
}