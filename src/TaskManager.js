import { PersonaInitialsColor } from "office-ui-fabric-react/lib/";

const dateOptions = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric"
};

let yesterday = new Date();
yesterday.setDate(yesterday.getDate() - 1);

const yesterdaysDate = yesterday.toLocaleDateString("en-us", dateOptions);

export default class TaskManager {
  constructor() {
    this._tasks = [
      {
        id: 1,
        title: "Wash the car",
        completed: true,
        personaProps: {
          text: "Carol Poland",
          secondaryText: `Created ${yesterdaysDate}`,
          initialsColor: PersonaInitialsColor.darkRed,
          imageUrl:
            "https://static2.sharepointonline.com/files/fabric/office-ui-fabric-react-assets/persona-female.png"
        }
      },
      {
        id: 2,
        title: "Get groceries",
        completed: true,
        personaProps: {
          text: "Amanda Brady",
          secondaryText: `Created ${yesterdaysDate}`,
          initialsColor: PersonaInitialsColor.orange,
          imageUrl:
            "https://static2.sharepointonline.com/files/fabric/office-ui-fabric-react-assets/persona-female.png"
        }
      },
      {
        id: 3,
        title: "Walk the dog",
        completed: false,
        personaProps: {
          text: "Miguel Garcia",
          secondaryText: `Created ${yesterdaysDate}`,
          initialsColor: PersonaInitialsColor.blue,
          imageUrl:
            "https://static2.sharepointonline.com/files/fabric/office-ui-fabric-react-assets/persona-male.png"
        }
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
    let today = new Date();
    let todaysDate = today.toLocaleDateString("en-us", dateOptions);

    if (title) {
      const newTask = {
        id: this._tasks.length + 1,
        title: title,
        completed: false,
        personaProps: {
          text: "Miguel Garcia",
          secondaryText: `Created ${todaysDate}`,
          initialsColor: PersonaInitialsColor.blue,
          imageUrl:
            "https://static2.sharepointonline.com/files/fabric/office-ui-fabric-react-assets/persona-male.png"
        }
      };
      this._tasks = this._tasks.concat(newTask);
    }
  }

  toggleTaskCompleted(taskId) {
    const updatedTasks = this._tasks;

    updatedTasks.forEach((task, index) => {
      let { id, completed } = task;

      if (id === taskId) {
        updatedTasks[index].completed = !completed;
      }
    });

    this._tasks = updatedTasks;
  }

  deleteTask(taskId) {
    let updatedTasks = this._tasks.slice();

    updatedTasks.forEach((task, index) => {
      let { id } = task;

      if (id === taskId) {
        updatedTasks.splice(index, 1);
      }
    });

    this._tasks = updatedTasks;
  }
}
