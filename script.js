class Task {
    constructor(name, dueDate, importance) { //dont pass isComplete
        this.name = name;   //task name, string
        this.dueDate = dueDate; //string 'yyyy-mm-dd'
        this.importance = importance; //integer 1-3, 1 is highest importance
        this.isComplete = false; //boolean
    }
}

let myArray = [];

function newObj(name_, dueDate_, importance_) {
    if (name_ != null && dueDate_ != null && importance_ != null) {
        myArray.push(new Task(name_,dueDate_,importance_))
    }
    else console.log("Input invalid") //text to html saying object not added bc missing input
}


function tableRefresh() {
    document.querySelectorAll('td').remove();
    document.querySelectorAll('tr.data-row').remove();
    for (let i = 0; i < myArray.length; i++) {
        let newRow = document.createElement('tr');
        newRow.class = 'data-row';
        document.querySelector('#task-table').appendChild(newRow);

        let newName = document.createElement('td');
        newName.innerHTML = myArray[i].name;
        document.querySelector(newRow).appendChild(newName);

        let newDate = document.createElement('td');
        newDate.innerHTML = myArray[i].dueDate;
        document.querySelector(newRow).appendChild(newDate);

        let newPriority = document.createElement('td');
        newPriority.innerHTML = myArray[i].importance;
        document.querySelector(newRow).appendChild(newPriority);
    }

}

function addTask() {
    let addName = document.querySelector('#task-name').value;
    let addDate = document.querySelector('#due-date').value;
    let addPriority = document.querySelector('#priority').value;
    
    newObj(addName, addDate, addPriority);
    tableRefresh();

}



//JavaScript to add new list item to HTML file
//let mainList = document.querySelector('ol');

/*

mainList.addEventListener('click', function removeItem(){
        document.querySelector('.thingToDo').remove();
    });
*/
//task list storage = array of tasks



