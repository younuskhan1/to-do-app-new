document.getElementById("input-button").addEventListener("click", function () {
    const inputRawTasks = document.getElementById("input-tasks");
    const inputTasks = inputRawTasks.value;
    if (inputTasks === "") {
        alert("Please firstly write the task name in the input field")
    } else {
        const incompleteContainer = document.getElementById("incomplete-container");
        const li = document.createElement("li");
        li.classList.add("inputList");
        li.innerHTML = `
        <input type="checkbox" class="input-checkbox"/><label class="label-text">${inputTasks}</label>
        `
        incompleteContainer.appendChild(li);
        inputRawTasks.value = "";

        const inputCheckBox = document.getElementsByClassName("input-checkbox");
        for (let CheckBox of inputCheckBox) {
            CheckBox.addEventListener("click", function (event) {
                event.target.parentNode.style.display = "none";
            })
        }
    }
})

