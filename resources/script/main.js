import { createTask, removeTask } from "./task.js";
import { clearForm, validateForm } from "./form.js";

const form = document.getElementById("taskForm");
const tasks = document.getElementById("tasks");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    if(validateForm()) {
        createTask()
    }

    clearForm();
});

tasks.addEventListener("click", (e) => {
    removeTask(e);
});