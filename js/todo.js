import * as utils from './utilities.js';

//  this is going to hold our toDo objects
let toDoList = [];

export default class todo {
    constructor() {
        this.newToDo = document.getElementById('new_task');
        this.UList = document.getElementById('todo');
    }
    addToDo() {
        this.saveToDo(this.newToDo.value);
        this.showToDoList();
    }

    showToDoList() {
        toDoList = utils.readLS("todo");
        if ( toDoList == null) toDoList = []
        this.filterToDos(null);
    }

    addEventListeners() {
        const listItems = Array.from(this.UList.children);
        if (listItems.length > 0 && listItems[0].children[0]) {
            listItems.forEach(item => {
                item.children[0].addEventListener('click', event => {
                    this.completeToDo(event.currentTarget.parentElement.id);
                })
                //task removal buttons
                item.children[2].addEventListener('click', event => {
                    this.removeItem(event.currentTarget.parentElement.id);
                })
            })
        }
    }

    //toggle the checkbox on/off, change boolean of item to true/false
    completeToDo(itemID) {
        //find this individual task in the To Do List
        let oneTask = toDoList.findIndex(task => task.id == itemID);
        //swap the boolean value (true = false, false = true)
        toDoList[oneTask].completed = !toDoList[oneTask].completed;
        //send the updated array to LocalStorage        
        utils.writeLS("todo", toDoList);
        //style the item
        let task = document.getElementById(itemID);
        task.classList.toggle('completed');
    }

    //remove an item from the list
    removeItem(itemID) {
        let oneTask = toDoList.findIndex(task => task.id == itemID);
        toDoList.splice(oneTask, 1);
        utils.writeLS("todo", toDoList);
        this.showToDoList();
    }

    addTabListeners() {
        //filter tabs
        const listTabs = Array.from(document.querySelectorAll('.bottom-tab'));
        listTabs.forEach(tab => {
            tab.addEventListener('click', event => {
                for (let item in listTabs) {
                    listTabs[item].classList.remove('selected-tab');
                }
                event.currentTarget.classList.add('selected-tab');
                this.filterToDos(event.currentTarget.id);
            })
        })
    }

    filterToDos(category) {
        let arrFilter;
        switch (category) {
            case 'active'   :   arrFilter = toDoList.filter(task => task.completed === false);
            case 'completed':   arrFilter = toDoList.filter(task => task.completed === true);
            default         :   arrFilter = toDoList;               //  return all tasks
        }
        renderToDoList(this.UList, arrFilter);
        this.addEventListeners();
    }

    saveToDo(nextTodo) {
        //create a task object using the entered data (incomplete by default)
        //(only if a value has been entered)
        if (nextTodo) {
            // generate an ID based on timestamp
            const newTask = {
                id: Date.now(),
                content: nextTodo,
                completed: false
            };
            toDoList.push(newTask);
            utils.writeLS("todo", toDoList);
            this.newToDo.classList.remove("error-input");
            this.newToDo.value = '';
        } else {
            this.newToDo.classList.add("error-input");
        }
        this.newToDo.focus();
    }
}

//make the list show up in HTML
function renderToDoList(parent, thisList) {
    parent.innerHTML = '';
    if (thisList != null && thisList.length > 0) {
        thisList.forEach(taskObject => {
            parent.appendChild(renderOneToDo(taskObject));
        })
    } else {
        const emptyList = document.createElement('li');
        emptyList.innerHTML = `No Tasks Found`
        parent.appendChild(emptyList);
    }
    updateCount(thisList);
}

//make one item show up in HTML
function renderOneToDo(task) {
    const oneTask = document.createElement('li');
    oneTask.className = task.completed ? 'completed' : '';
    oneTask.id = task.id;
    oneTask.innerHTML = `<input id="${task.id}X" type="checkbox" value="none" ${task.completed ? 'checked' : ''}>
        <label for="${task.id}X">${task.content}</label>
        <div class="remove">X</div>`;
    return oneTask;
}

//update the counter at the bottom
function updateCount(list) {
    const taskCounter = document.getElementById('task-counter');
    if (list != null) {
        taskCounter.innerHTML = `${list.length} tasks found`;
    } else {
        taskCounter.innerHTML = `0 tasks found`;
    }
}
