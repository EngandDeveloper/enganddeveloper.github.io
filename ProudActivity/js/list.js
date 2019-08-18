/*eslint-env browser*/

//variables

var taskInput = document.getElementById("taskInput");
var taskList = document.getElementById("taskList");
var addTaskBtn = document.getElementById("addTask");
var id = 1;

addTaskBtn.addEventListener("click", addTask);

taskInput.onkeyup = function(e){
    if(e.keyCode == 13){
       addTask();
    }
}

//checkbox.addEventListener("checked", checked);

function addTask(){
    var taskText = taskInput.value;
    if(taskText === ""){
        alert("You Must Enter a Task!");
    }else{
        var item = document.createElement("li");
        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.id = "checkbox";
        item.textContent = taskText;
        item.appendChild(checkbox);
        taskList.append(item);
        id++;
        taskInput.value = "";
    }
}

//function checked(){
//    taskText.
//}

