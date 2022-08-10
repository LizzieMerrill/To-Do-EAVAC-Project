class Task {
    constructor(name, dueDate, priority) { //dont pass isComplete
        this.name = name;   //task name, string
        this.dueDate = dueDate; //string 'yyyy-mm-dd'
        this.priority = priority; //integer 1-3, 1 is highest priority
        this.isComplete = false; //boolean initializes as false and changes to true when user checks box
    }

    toString() {
        return this.name + ',' + this.dueDate + ',' + this.priority;
    }
}

let taskArray = [];

function newObj(name_, dueDate_, priority_) {
    let warning = document.querySelector('#warning')
    if (name_ === '') {
        warning.innerHTML = 'Enter a task name.';
    } else {
        
        let newTask = new Task(name_, dueDate_, priority_)
       
        // user input matches a task in the array
        for (let i=0; i<taskArray.length; i++) {
            if (newTask.toString() === taskArray[i].toString()) {
                warning.innerHTML = 'Task already in list.';
                return;
            }
        }

        warning.innerHTML = ''
        taskArray.push(newTask);
        // check whether all input fields match a task already in the array
    }

}


function tableRefresh() {       
        document.querySelector('tbody').remove();
        let refresh = document.createElement('tbody');
        document.querySelector('table').appendChild(refresh);

    for (let i = 0; i < taskArray.length; i++) {
        let newRow = document.createElement('tr');
        newRow.id = ('data-row' + i);
        newRow.addEventListener('click', removeItem);  // adds event handler to each new row
        document.querySelector('tbody').appendChild(newRow);

    
        let newName = document.createElement('td');
        newName.innerHTML = taskArray[i].name;
        document.querySelector('#data-row' + i).appendChild(newName);

        let newDate = document.createElement('td');
        newDate.innerHTML = taskArray[i].dueDate;
        document.querySelector('#data-row' + i).appendChild(newDate);


        let newPriority = document.createElement('td');
        newPriority.innerHTML = taskArray[i].priority;
        document.querySelector('#data-row' + i).appendChild(newPriority);
    }

}

//Removes the line item clicked in the table
function removeItem(e){
    for (i = 0; i < (e.currentTarget.children.length); i++) {
        if (e.currentTarget.children[0].innerHTML == taskArray[i].name.toString()) {
            if (e.currentTarget.children[1].innerHTML == taskArray[i].dueDate.toString()) {
                if (e.currentTarget.children[2].innerHTML == taskArray[i].priority.toString()) {
                    taskArray.splice(i, i++);
                }
            }
        }
    }
    e.currentTarget.remove();
}

function addTask() {
    let addName = document.querySelector('#task-name').value;
    let addDate = document.querySelector('#due-date').value;
    let addPriority = document.querySelector('#priority').value;
    
    newObj(addName, addDate, addPriority);
    sortTasks(taskArray);
    tableRefresh();
    fieldReset();


}

function fieldReset() {
    document.querySelector('#task-name').value = '';
    document.querySelector('#due-date').value = '';
    document.querySelector('#priority').value = 3;
}


function comparePriority(task1, task2) {
    if (task1.priority < task2.priority) {      //task1 higher priority
        return -1;                              //task1 sorted before task2
    }
    if (task1.priority > task2.priority) {      //task1 lower priority
        return 1;                               //task1 sorted after task2
    }
    return 0;                                   //same priority, keep original order
}

function compareDueDate(task1, task2) {
    if (task1.dueDate < task2.dueDate) {        //task1 due sooner
        return -1;                              //task1 sorted before task2
    }
    if (task1.dueDate > task2.dueDate) {        //task1 due later
        return 1;                               //task1 sorted after task2
    }   
    return 0;                                   //same due date, keep original order
}

function compareName(task1, task2) {
    if (task1.name < task2.name) {              //task1 lexicographically before task2
        return -1;                              //task1 sorted before task2
    }
    if (task1.dueDate > task2.dueDate) {        //task1 lexicographically before later
        return 1;                               //task1 sorted after task2
    }   
    return 0;                                   //same name, keep original order
}

function sortTasks(taskArrayy) {
    taskArrayy.sort(compareName);       //name is lowest level of sort order
    taskArrayy.sort(compareDueDate);
    taskArrayy.sort(comparePriority);   //priority is highest level of sort order
}