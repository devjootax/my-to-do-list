const newTaskInput = document.getElementById("new-task-input");
const tasks = document.getElementById("tasks");
let ids = 0;

function createLi() {
  const li = document.createElement("li");
  li.classList.add("task");
  li.id = `task-${ids}`;
  return li;
}

function createCheckBox() {
  const input = document.createElement("input");
  input.id = `radio-${ids}`;
  input.type = "checkbox";
  return input;
}

function createLabel() {
  const label = document.createElement("label");
  label.innerText = newTaskInput.value;
  label.setAttribute("for", `radio-${ids}`);
  return label;
}

function createTrashIcon() {
  const img = document.createElement("img");
  img.id = `trash-icon-${ids}`;
  img.setAttribute("src", "./assets/lixeira.png");
  return img;
}

function createTask() {
  if (newTaskInput.value !== "") {
    ids++;

    const li = createLi();
    const input = createCheckBox();
    const label = createLabel();
    const trashIcon = createTrashIcon();

    li.append(input, label, trashIcon);
    tasks.appendChild(li);
  } else {
    throw new Error("opa irmao, preenche os campos aí.");
  }
}

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  createTask();

  form.reset();
});
