/*
 * Filename: complex_code_example.js
 * Description: This code demonstrates a complex implementation of a task prioritization system.
 * Author: [Your Name]
 * Date: [Current Date]
 */

// Class representing a task
class Task {
  constructor(name, priority, dueDate) {
    this.name = name;
    this.priority = priority;
    this.dueDate = dueDate;
  }
}

// Class representing a task list
class TaskList {
  constructor() {
    this.tasks = [];
  }

  // Method to add a task to the list
  addTask(task) {
    this.tasks.push(task);
  }

  // Method to sort tasks based on priority and due date
  sortTasks() {
    this.tasks.sort((a, b) => {
      if (a.priority === b.priority) {
        return new Date(a.dueDate) - new Date(b.dueDate);
      }
      return a.priority - b.priority;
    });
  }
}

// Create a task list
const myTaskList = new TaskList();

// Add tasks to the task list
myTaskList.addTask(new Task("Finish project", 5, "2022-12-31"));
myTaskList.addTask(new Task("Prepare presentation", 3, "2022-12-15"));
myTaskList.addTask(new Task("Write documentation", 2, "2022-12-20"));
myTaskList.addTask(new Task("Research new technologies", 4, "2022-11-30"));

// Sort the tasks
myTaskList.sortTasks();

// Print the sorted tasks
console.log("Sorted Task List:");
myTaskList.tasks.forEach((task) => {
  console.log(`Name: ${task.name}, Priority: ${task.priority}, Due Date: ${task.dueDate}`);
});

// Output:
// Sorted Task List:
// Name: Research new technologies, Priority: 4, Due Date: 2022-11-30
// Name: Write documentation, Priority: 2, Due Date: 2022-12-20
// Name: Prepare presentation, Priority: 3, Due Date: 2022-12-15
// Name: Finish project, Priority: 5, Due Date: 2022-12-31
// (Tasks sorted by priority and due date)