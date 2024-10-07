let task = document.getElementById("addTask");
let submit = document.getElementById("Submit");
let taskList = document.getElementById("taskList");
let doneList = document.getElementById("doneList");

let list = new Array();

submit.addEventListener("click", (event) => {
    if(addTask.value != "") {
        list.push(task.value);
        taskList.innerHTML += `<li id=${list.length-1}><button onclick=complete(${list.length-1})>${task.value}</button></li>`;
        addTask.value = "";
    }
});

function complete(id) {
    doneList.innerHTML += `<li>${list[id]}</li>`;
    document.getElementById(id).style.display = "none";
}