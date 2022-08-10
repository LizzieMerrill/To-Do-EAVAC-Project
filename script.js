class Task {
    constructor(name, dueDate, priority) { //dont pass isComplete
        this.name = name;   //task name, string
        this.dueDate = dueDate; //string 'yyyy-mm-dd'
        this.priority = priority; //integer 1-3, 1 is highest priority
        this.isComplete = false; //boolean initializes as false and changes to true when user checks box
// list item storage structure
// array of task objects
    }
}

let taskArray = [];

function newObj(name_, dueDate_, priority_) {
    if (name_ != null && dueDate_ != null && priority_ != null) {
        taskArray.push(new Task(name_,dueDate_,priority_));
    }
    else console.log("Input invalid"); //text to html saying object not added bc missing input
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
    alert('clicked');
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


//task list storage = array of tasks


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