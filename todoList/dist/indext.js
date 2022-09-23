"use strict";
var listElement = document.querySelector("#app ul");
var inputElement = document.querySelector("#app input");
var buttonElement = document.querySelector("#app button");
var salvedList = localStorage.getItem("@taskList");
var tasks = (salvedList !== null && JSON.parse(salvedList)) || [];
function listTasks() {
    listElement.innerHTML = "";
    tasks.map(function (item) {
        var todoElement = document.createElement("li");
        var taskText = document.createTextNode(item);
        var linkElement = document.createElement("a");
        linkElement.setAttribute("href", "#");
        var position = tasks.indexOf(item);
        linkElement.setAttribute("onclick", "deleteTask(" + position + ")");
        linkElement.setAttribute("style", "margin-left: 10px;");
        var linkText = document.createTextNode("Excluir");
        linkElement.appendChild(linkText);
        todoElement.appendChild(taskText);
        todoElement.appendChild(linkElement);
        listElement.appendChild(todoElement);
        console.log("clicou");
    });
}
listTasks();
function addTask() {
    if (inputElement.value === "") {
        alert("Digite alguma tarefa");
        return false;
    }
    var digitedTask = inputElement.value;
    tasks.push(digitedTask);
    inputElement.value = "";
    salveTaskOnLocalStorage();
    listTasks();
}
function deleteTask(position) {
    tasks.splice(position, 1);
    listTasks();
    salveTaskOnLocalStorage();
}
buttonElement.onclick = addTask;
function salveTaskOnLocalStorage() {
    localStorage.setItem("@taskList", JSON.stringify(tasks));
}
