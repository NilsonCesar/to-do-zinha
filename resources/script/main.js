const button = document.getElementById("submission-button");

// let sectionTest = document.createElement("section");
// sectionTest.classList.add("task");

// let sectionName = document.createElement("h3");
// sectionName.innerHTML = "Terminar a to-do";

// sectionTest.appendChild(sectionName);
// document.getElementById("tasks").appendChild(sectionTest);

// In soon, create a createTask.js module to this code:
const createTask = (nameTask, sectionTask, descriptionTask) => {
}

const validateForm = () => {
    const name = document.getElementById("name").value.trim();
    const section = document.getElementById("section").value.trim();
    const description = document.getElementById("description").value.trim();
    
    const isRequiredInputsBlank = !name || !section;

    if(!isRequiredInputsBlank) {
        createTask(name, section, description);
    }
};

button.addEventListener("click", validateForm);