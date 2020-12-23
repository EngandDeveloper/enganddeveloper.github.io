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

// ******** Client Side Database (IndexDB) Code ***********
// Mozilla developer guide for indexDB was followed, for future reference the guide link:
// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Client-side_storage


//Initiate the database: db
let db;



//On Window Open
window.onload = function() {
    //request database
    let request = window.indexedDB.open('taskList', 1);

    //error handling for db request
    request.onerror = function() {
        console.log('Database failed to open');
    };

    //when the request is successful:
    request.onsuccess = function(){
        console.log('Database opened successfully');

        //assign request to db
        db = request.result;

        //display data by calling a function
        //displayTasks();
    }

    //databse set-up and modification(updgrade)
    request.onupgradeneeded = function(e) {
        //grab a reference to the opened database
        let db = e.target.result;

        //create an objectStore which will act like a single db table to store data
        //think keyPath as primarykey in db
        let objectStore = db.createObjectStore('tasksOS', {keyPath: 'taskId', autoIncrement:true});

        //Define which items will be stored in objectStore, think them as attributes in db
        //In our case we only need task:String to store the TODO item apart from the unique id which we defined above
        objectStore.createIndex('task', 'task', {unique:false});

        console.log('Database setup complete');
    }

}

