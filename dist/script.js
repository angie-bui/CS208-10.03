document.addEventListener("DOMContentLoaded", domLoaded);

function domLoaded() {
    const addButton = document.getElementById("add-button");
    if (!addButton) {
        console.error('Button with ID "add-button" not found.');
        return;
    }

    const textbox = document.getElementById("new-task");
    if (!textbox) {
        console.error('Textbox with ID "new-task" not found.');
        return;
    }

    addButton.addEventListener("click", addBtnClick);

    textbox.addEventListener("keyup", function(event) {
        if (event.key === "Enter") {
            addBtnClick();
        }
    });

    const doneButtons = document.querySelectorAll(".done-btn");
    doneButtons.forEach(function(button) {
        button.addEventListener("click", removeTask);
    });
}

function addBtnClick() {
    const textbox = document.getElementById("new-task");
    if (!textbox) {
        console.error('Textbox with ID "new-task" not found.');
        return;
    }

    const newTask = textbox.value.trim();
    if (newTask === "") {
        textbox.focus();
        return;
    }

    addTask(newTask);
    textbox.value = "";
    textbox.focus();
}

function addTask(newTask) {
    const li = document.createElement("li");
    li.innerHTML = '<span class="task-text">' + newTask + '</span><button class="done-btn">&#10006;</button>';

    const taskList = document.querySelector("ol");
    if (!taskList) {
        console.error("Ordered list not found.");
        return;
    }

    taskList.appendChild(li);

    const doneButton = li.querySelector(".done-btn");
    doneButton.addEventListener("click", removeTask);
}

function removeTask(event) {
    const li = event.target.parentNode;
    li.remove();
}