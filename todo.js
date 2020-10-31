let numRows = 0; 
let tasksCreated = 0;
let tasksDeleted = 0;
let tasksCompleted = 0;
let taskClass = 'c' + numRows;

let array = [];
if (typeof(Storage) !== "undefined"){
    for (var key in localStorage) {
        if (localStorage.hasOwnProperty(key)) {
            array.push(localStorage[key]);
            console.log(key + " -> " + JSON.parse(window.localStorage.getItem(key)));
        }
    }
}

console.log(array);

function addTask(addTaskButton) {
   // Create String for Chore
   let taskName = document.getElementById("nameTask").value;

   // Find Table
   let table = document.getElementById("toDoTable"); 

   // Create Empty Row 
   let row = table.insertRow(numRows);

   row.setAttribute('id', 'r' + numRows);
   row.setAttribute('value', 'uncompleted');

  // Create Checkbox, Task Name, and Remove Button Cells
  let cellFirst = row.insertCell(0);
  let cellCheckbox = row.insertCell(1);
  let cellRemove = row.insertCell(2); 

   // Add content to Cells
   cellCheckbox.innerHTML = `<input type="checkbox" onclick="completeTask(this)" className=${taskClass} value=${taskName}/>
                              <label class="strikethrough">${taskName}</label>`; 
   cellRemove.innerHTML     = `<button onclick="deleteRow(this)">X</button>`;
         
   let taskKey = "task" + numRows; 

   const taskObj = { 
    id: Date.now(), 
    content: taskName, 
    completed: false 
   };

   window.localStorage.setItem(taskKey, JSON.stringify(taskObj));
   numRows++;
   tasksCreated++
   document.getElementById("tasksLeft").innerHTML = `${tasksCreated - tasksDeleted - tasksCompleted} tasks left`;
}

function completeTask(completedButton){
  let isChecked = completedButton.checked;
  let cell = completedButton.parentNode.nextSibling;
  
  if (isChecked){
    tasksCompleted++
    document.getElementById("tasksLeft").innerHTML = `${tasksCreated - tasksDeleted - tasksCompleted} tasks left`;
    completedButton.parentNode.parentNode.setAttribute('value', 'completed');
  }
  else if(!isChecked){
    tasksCompleted--
    document.getElementById("tasksLeft").innerHTML = `${tasksCreated - tasksDeleted - tasksCompleted} tasks left`;
    completedButton.parentNode.parentNode.setAttribute('value', 'uncompleted');
  }
  
}

function deleteRow(deleteButton) {
  let row = deleteButton.parentNode.parentNode.rowIndex; 
  document.getElementById("toDoTable").deleteRow(row); 
  numRows--; 
  if(deleteButton.parentNode.parentNode.getAttribute('value') === 'uncompleted'){
    tasksDeleted++; 
  }
  document.getElementById("tasksLeft").innerHTML = `${tasksCreated - tasksDeleted - tasksCompleted} tasks left`;
}

function filterActive(){
  let table = document.getElementById("toDoTable");
  for (let i = 0, row; row =table.rows[i]; i++){
    if(row.getAttribute('value') === "completed"){
      row.style.display = "none"; 
    }
    else{
      row.style.display = "table-row"; 
    }
  }
}

function filterCompleted(){
  let table = document.getElementById("toDoTable");
  for (let i = 0, row; row =table.rows[i]; i++){
    if(row.getAttribute('value') === "uncompleted"){
      row.style.display = "none"; 
    }
    else{
      row.style.display = "table-row"; 
    }
  }
}

function filterAll(){
  let table = document.getElementById("toDoTable");
  for (let i = 0, row; row =table.rows[i]; i++){
      row.style.display = "table-row"; 
  }
}
