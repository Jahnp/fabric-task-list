export default class TaskManager {
  constructor() {
    this._tasks = [
      {
        id: 1,
        title: 'Wash the car',
        completed: true
      },
      {
        id: 2,
        title: 'Get groceries',
        completed: true
      },
      {
        id: 3,
        title: 'Walk the dog',
        completed: false
      }
    ];
  }

  getTasks() {
    return this._tasks;
  }

  getCompletedTaskCount() {
    return this._tasks.filter(task => task.completed).length;
  }

  getTaskCount() {
    return this._tasks.length;
  }

  getTasksPercentComplete() {
    return this.getCompletedTaskCount() / this.getTaskCount();
  }

  addTask(title) {
    if (title) {
      const newTask = {
        id: this._tasks.length + 1,
        title: title,
        completed: false
      };
      this._tasks = this._tasks.concat(newTask);
    }
  }

  toggleTaskCompleted(taskId) {
    const updatedTasks = this._tasks;
    updatedTasks[taskId - 1].completed = !this._tasks[taskId - 1].completed;
    this._tasks = updatedTasks;
  }
}