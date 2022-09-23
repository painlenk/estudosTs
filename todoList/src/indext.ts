let listElement = document.querySelector("#app ul") as HTMLUListElement;
let inputElement = document.querySelector("#app input") as HTMLInputElement;
let buttonElement = document.querySelector("#app button") as HTMLElement;

let salvedList: string | null = localStorage.getItem("@taskList");

let tasks: string[] = (salvedList !== null && JSON.parse(salvedList)) || [];

function listTasks() {
  listElement.innerHTML = "";

  tasks.map((item) => {
    let todoElement = document.createElement("li");
    let taskText = document.createTextNode(item);

    let linkElement = document.createElement("a");

    linkElement.setAttribute("href", "#");
    let position = tasks.indexOf(item);

    linkElement.setAttribute(`onclick`, `deleteTask(${position})`);
    linkElement.setAttribute("style", "margin-left: 10px;");

    let linkText = document.createTextNode("Excluir");

    linkElement.appendChild(linkText);

    todoElement.appendChild(taskText);
    todoElement.appendChild(linkElement);
    listElement.appendChild(todoElement);
    console.log("clicou");
  });
}

listTasks();

function addTask(): boolean | void {
  if (inputElement.value === "") {
    alert("Digite alguma tarefa");
    return false;
  }

  let digitedTask: string = inputElement.value;
  tasks.push(digitedTask);

  inputElement.value = "";
  salveTaskOnLocalStorage();
  listTasks();
}

function deleteTask(position: number) {
  tasks.splice(position, 1);
  listTasks();
  salveTaskOnLocalStorage();
}

buttonElement.onclick = addTask;

function salveTaskOnLocalStorage() {
  localStorage.setItem("@taskList", JSON.stringify(tasks));
}
