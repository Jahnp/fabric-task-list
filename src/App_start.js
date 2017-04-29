import React, { Component } from 'react';
import {
  Fabric
} from 'office-ui-fabric-react/lib/';
import TaskManager from './TaskManager';
import './App.css';

class App extends Component {
  _TaskManager = new TaskManager();

  state = {
    tasks: this._TaskManager._tasks,
    inputValue: ''
  }

  render() {
    return (
      <Fabric className="App">
        <h1 className="App-header">Task List</h1>
        <div className="App-main">
          { this._renderCreateTask() }
          { this._renderTaskList() }
        </div>
        <div className="App-footer">
          { this._renderProgress() }
        </div>
      </Fabric>
    );
  }

  _renderCreateTask() {
    return (
      <div className="App-createTask">
        [Text field to describe the task.]
        [Button to add the task.]
      </div>
    );
  }

  _renderTaskList() {
    return (
      <div className='App-taskList'>
        {
          this.state.tasks.map(
            task => {
              return (
                <div>[{ task.title }]</div>
              );
            }
          )
        }
      </div>
    );
  }

  _renderProgress() {
    return (
      <div>[Progress indicator]</div>
    );
  }

  _addTask() {
    this._TaskManager.addTask(this.state.inputValue);

    this.setState({
      tasks: this._TaskManager.getTasks(),
      inputValue: ''
    });
  }
  
  _toggleTaskCompleted(taskId) {
    this._TaskManager.toggleTaskCompleted(taskId);

    this.setState({
      tasks: this._TaskManager.getTasks()
    });
  }
}

export default App;
