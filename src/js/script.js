function prevent(event){
    /* Make sure it is the first line of code in the function, if there is an error in a line of code that is above event.preventDefault() the function will stop and never reach it.
    /* If you were to comment out the line below you would see that the page reloads every time you click the button */
    event.preventDefault();
}

class Task {
    constructor({ text, date, done, id }) {
        // HINT This method is the constructor. In C++, this would be
        // the Task() method. The curly braces inside the constructor is 
        // a JavaScript syntax that is called 'deconstruction'. This
        // means the constructor will ask for an object
        // (`{i: 'am', an: 'object'}`) with the parameters `text`,
        // `date`, `done`, and `id`. This will make it easier to
        // convert it from the local storage database we will set up.
        this.text = text
        this.date = date
        this.done = done
        this.id = id
    }
    toHTML() {
        // TODO: Fill out this method. It should return a string version
        // of this task, including an `<li>` tag and all of the
        // css classes you used to make it look pretty. It should
        // display the `text`, `date`, and `done` property of this
        // Task. It should also have two inline event handlers, which call the
        // update and delete function, with this Task's `id` as a
        // parameter.
        return 
        `
        <li>
            <input type="checkbox" class="${task-done ? "THISCLASSISTRUE" : "THISCLASSISFALSE"} checkbox-icon" name="check2" id="check2" checked/>
            <li class="task-description set-width checked-task">${this.text}</li>
            <li class="task-date">${this.prettyDate()}</li>
            <button class="task-delete material-icon" type="button">clear</button><br>
        </li>
        `
        
    }
    prettyDate() {
        // TODO: Fill out this method. It should return the date in our
        // locale's format, 'MM / DD / YYYY', instead of the
        // easily-sortable international standard, 'YYYY-MM-DD'.
        return ``
    }
    toggle() {
        // TODO: Fill out this method. It should flip this Task's `done`
        // property from `true` to `false`, or from `false` to `true`.
    }
}

let tasks = [
    new Task({
        text: "First task",
        done: false,
        date: "2020-02-10",
        id: Date.now() // makes a unique id
    })
]

// Delete the hardcoded task array once it gets all figured out and use whats below for local storage
// let tasks = readStorage()

function updateStorage(newData) {
    // ... update the local storage
    localStorage.setItem("tasks", JSON.stringify(newData))
}

function readStorage() {
    // ... read from the local storage
    let jsonString = localStorage.getItem("tasks")
    let result = JSON.parse(jsonString) || []
    result = result.map(taskData => new Task(taskData))
}

function createTask() {
    // TODO: Pull in form data from DOM
    // TODO: Format it to JSON
    // TODO: Save it to local storage
    // Hint - Look at the JavaScript code from lab 1B to see how to extract form data
}
function readTasks() {
    // TODO: Pull in tasks from local storage
    // TODO: Parse tasks using the toHTML() function
    // TODO: Update DOM accordingly
}
function updateTask(id) {
    // TODO: Update the task in `tasks` array by flipping it's `done` value
    // TODO: Save to local storage
    // TODO: Make the DOM update
}
function deleteTask(id) {
    // TODO: Delete task from `tasks` array
    // TODO: Save to local storage
    // TODO: Make the DOM update
}

function on_submit(event) {
    let formData = new FormData(event.currentTarget);
    let json = JSON.stringify(Object.fromEntries(formData));
    alert(json);
    console.log(alert)
    event.preventDefault();
}
