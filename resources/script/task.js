const createTask = () => {
    const nameTask = document.getElementById("name").value.trim();
    const descriptionTask = document.getElementById("description").value.trim();

    let name = nameTask.replace(/\s+/g, '');

    let sectionTask = document.createElement("section");
    sectionTask.classList.add("task");
    sectionTask.setAttribute("id", name + "-task");
    
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
};

const removeTask = (e) => {
    let type = e.target.type;
    if(type === 'checkbox') {
        let name = e.target.name;
        let task = document.getElementById(name + '-task');
        tasks.removeChild(task);
    }
};

export { createTask, removeTask };