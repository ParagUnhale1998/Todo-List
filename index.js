let input = document.getElementById("i-value");
let addTask = document.getElementById("addTask");
let taskList = document.getElementById("item-list");
let checkbox = document.getElementById("checked");


// Load tasks from local storage and create empty array
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];


function addTaskItem() {
    let inputvalue = document.getElementById("i-value").value;
    if (inputvalue != "") {
        let item = document.createElement("li");
        item.innerHTML = ` ${inputvalue} <input class="checkboxes" type="checkbox">`;
        item.classList.add("task-items")
        taskList.appendChild(item);
        //    inputvalue =""; is not working because its clear on inputvalue from inside not outside
        // Add task to array
        tasks.push(inputvalue);
        localStorage.setItem('tasks', JSON.stringify(tasks));
        input.value = "";
    }
    else {
        document.getElementById("i-value").placeholder = "Please Enter Task";
    }
}

//===========================CLEAR ALL TASK=================================================

// I TOUGHT THIS WAS EASY 

// function clearAllTasks() {
//     while (taskList.firstChild) {
//       taskList.removeChild(taskList.firstChild);
//     }
//   }

// THEN I FOUND THIS 

function clearAllTasks() {
    taskList.innerHTML = "";
     // Clear tasks from local storage
     localStorage.removeItem('tasks');
}

//=========================(1)Edit-Task-Using-Prompt===========================


// function editTask() {
//     let checkboxes = document.querySelectorAll('#item-list input[type="checkbox"]');
//     checkboxes.forEach(function (checkbox) {
//         if (checkbox.checked) {
//             let newTask = prompt("Edited This Task", checkbox.parentNode.textContent);
//                             or
//             let newTask = prompt("Edited This Task");
//             if (newTask !== null) {
//                 checkbox.parentNode.innerHTML = ` ${newTask} <input class="checkboxes" type="checkbox">`;
//             }
//             checkbox.checked = false;
//         }
//     });
// }

//=========================(2)Edit-Task-Using-input===========================

function editTask() {
    
    let checkboxes = document.querySelectorAll('#item-list input[type="checkbox"]');
    checkboxes.forEach(function (checkbox) {
        if (checkbox.checked) {
            // This code is for old value if we do not change
            let oldValue = checkbox.parentNode.firstChild.textContent.trim();
            checkbox.parentNode.innerHTML = `<input type="text" id="task-input" placeholder="Type Your Task" onchange="onBlurInput()" value="${oldValue}"> <input class="checkboxes" type="checkbox">`;
            //we use onchange event for if we change the value then the value change by this function 
            checkbox.checked = false;
            }
    });
}

//==========================================================For-Store-input-value=================

function onBlurInput(){
    // this function to push the change value to local storage but the problem is not replace item only add one more item 
        let x = document.getElementById("task-input");
        tasks.push(x.value);
        localStorage.setItem("tasks", JSON.stringify(tasks)); 
}


//==============================Delete-Task================================================

function deleteTask() {
    let checkboxes = document.querySelectorAll('#item-list input[type="checkbox"]');
    checkboxes.forEach(function (checkbox) {
        if (checkbox.checked) {
            checkbox.parentNode.remove();
            let index = tasks.indexOf(checkbox.parentNode.textContent.trim());
            tasks.splice(index, 1);
            // Save tasks to local storage
            localStorage.setItem('tasks', JSON.stringify(tasks));
        }
    });
}

//===============================Load-Task_From-Local_Storage==============================================

// Load saved tasks on page load
function loadTasks() {
    tasks.forEach(function (task) {
        let item = document.createElement("li");
        item.innerHTML = `${task} <input class="checkboxes" type="checkbox">`;
        item.classList.add("task-items");
        taskList.appendChild(item);
    });
}
loadTasks();
//======================================End-of-Javascript=======================

