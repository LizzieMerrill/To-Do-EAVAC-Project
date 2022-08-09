// list item storage structure
// array of task objects

class task {
    constructor(name, dueDate, importance, isComplete) {
        this.name = name;   //task name, string
        this.dueDate = dueDate; //string 'yyyy-mm-dd'
        this.importance = importance; //integer 1-3, 1 is highest importance
        this.isComplete = isComplete; //boolean
    }
}

//task list storage = array of tasks