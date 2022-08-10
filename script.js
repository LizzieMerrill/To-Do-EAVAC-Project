// list item storage structure
// array of task objects


class task {
    
    constructor(name, dueDate, priority) { //dont pass isComplete
        this.name = name;   //task name, string
        this.dueDate = dueDate; //string 'yyyy-mm-dd'
        this.priority = priority; //integer 1-3, 1 is highest priority
        this.isComplete = false; //boolean; initializes as false and changes to true when user checks box
        //should we remove isComplete property and set priority = 4 for completed tasks?
    }
    
}

let taskArray = [];

function newObj(namee, dueDatee, priorityy) {
    if (namee != null && dueDatee != null && priorityy != null) {
        taskArray.push(new task(namee,dueDatee,priorityy))
    }
    else
    //text to html saying object not added bc missing input
    console.log("Input invalid")
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
    taskArray.sort(compareDueDate);
    taskArrayy.sort(comparePriority);   //priority is highest level of sort order
}

// test sortTasks function
// let testArray = [
//                     new task('Laundry LP', '2022-01-01', 3),
//                     new task('Laundry LP', '2022-01-01', 2),
//                     new task('Laundry LP', '2022-01-01', 1),
//                     new task('Laundry LP', '2022-01-01', 3),
//                     new task('Laundry LP', '2022-01-01', 3),
//                     new task('Laundry LP', '2022-01-01', 1),
//                     new task('Laundry LP', '2022-01-01', 2),
//                 ];

// sortTasks(testArray);
// console.log(testArray);




