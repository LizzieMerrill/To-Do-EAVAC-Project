// list item storage structure
// array of task objects


class task {//done by Vyvian


    constructor(name, dueDate, priority, isComplete) {
        this.name = name;   //task name, string
        this.dueDate = dueDate; //string 'yyyy-mm-dd'
        this.priority = priority; //integer 1-3, 1 is highest importance
        this.isComplete = isComplete; //boolean
    }
}


//task list storage = array of tasks
let myArray = [];




//JavaScript to add new list item to HTML file
//let mainList = document.querySelector('ol');



function addItem(){
let newLI = document.createElement('li');
newLI.innerHTML = prompt("Enter a new to-do list item: ");
newLI.setAttribute('id', )
newLI.setAttribute('class', "thingToDo");
newLI.ad
//let mainList = document.querySelector('ol');
//mainList.appendChild(newLI);

}

mainList.addEventListener('click', function removeItem(){
        document.querySelector('.thingToDo').remove();
    });
=======
//task list storage = array of tasks
>>>>>>> 32da99e3646d172651bf4f71cc054cfc18942d44
