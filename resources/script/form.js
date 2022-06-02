const clearForm = () => {
    document.getElementById("name").value = "";
    document.getElementById("description").value = "";
};

const validateForm = () => {
    const name = document.getElementById("name").value.trim();
    
    const isRequiredInputsBlank = !name;

    if(!isRequiredInputsBlank) {
        return true;
    }

    return false;
};


export { clearForm, validateForm };