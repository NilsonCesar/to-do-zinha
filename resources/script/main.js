const form = document.getElementById("taskForm");

// In soon, create a createTask.js module to this code:
const createTask = (nameTask, descriptionTask) => {
    let name = nameTask.replace(/\s+/g, '');

    let sectionTask = document.createElement("section");
    sectionTask.classList.add("task");
    
    let checkTask = document.createElement("input");
    checkTask.setAttribute("type", "checkbox");
    checkTask.setAttribute("name", name);
    checkTask.setAttribute("id", name);
    checkTask.setAttribute("value", name);
    
    let taskName = document.createElement("label");
    taskName.innerHTML = nameTask;
    taskName.setAttribute("for", name);

    sectionTask.appendChild(checkTask);
    sectionTask.appendChild(taskName);

    let descriptionText = document.createElement("p");
    descriptionText.innerHTML = descriptionTask;
    taskName.appendChild(descriptionText);
    
    document.getElementById("tasks").appendChild(sectionTask);
}

const clearForm = () => {
    document.getElementById("name").value = "";
    document.getElementById("description").value = "";
}

const validateForm = () => {
    const name = document.getElementById("name").value.trim();
    const description = document.getElementById("description").value.trim();
    
    const isRequiredInputsBlank = !name;

    if(!isRequiredInputsBlank) {
        createTask(name, description);
    }
};

form.addEventListener("submit", (e) => {
    e.preventDefault();
    validateForm();
    clearForm();
});