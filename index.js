let ids = 0;

function createCheckBox() {
  const input = document.createElement("input");
  input.id = `radio-${ids}`;
  input.type = "radio";

  return label;
}

function createLabel() {
  const label = document.createElement("label");
  label.innerText = newTaskInput.value;
  label.setAttribute("for", `radio-${ids}`);

  return label;
}

function createLi() {
  const li = document.createElement("li");
  li.classList.add("task");
  li.id = `task-${ids}`;
}

function createTask() {
  console.log("opa, fui chamada");
  const newTaskInput = document.getElementById("new-task-input");
  const tasksContainer = document.getElementById("tasks");

  if (newTaskInput.value !== "") {
    ids++;

    li.append(input, label);
    tasksContainer.appendChild(li);
  } else {
    throw new Error("opa irmao, preenche os campos aí.");
  }
}

document.getElementById("add-task-btn").addEventListener("click", createTask);
