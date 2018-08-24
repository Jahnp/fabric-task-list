import React, { Component } from 'react';
import {
  Fabric,
  Checkbox,
  TextField,
  PrimaryButton,
  ProgressIndicator,
  Customizer
} from 'office-ui-fabric-react/lib/';
import { initializeIcons } from 'office-ui-fabric-react/lib/Icons';
import { FluentCustomizations } from '@uifabric/experiments/lib/components/fluent/FluentCustomizations';

import TaskManager from './TaskManager';
import './App.css';

initializeIcons();

class App extends Component {
  _TaskManager = new TaskManager();

  state = {
    tasks: this._TaskManager._tasks,
    inputValue: ''
  }

  render() {
    return (
      <Customizer {...FluentCustomizations}>
        <Fabric className="App">
          <h1 className="App-header">Task List</h1>
          <div className="App-main">
            {this._renderCreateTask()}
            {this._renderTaskList()}
          </div>
          <div className="App-footer">
            {this._renderProgress()}
          </div>
        </Fabric>
      </Customizer>
    );
  }

  _renderCreateTask() {
    return (
      <div className="App-createTask">
        <TextField
          className='App-createTask-field'
          onChange={(event) => (
            this.setState({
              inputValue: event.target.defaultValue
            })
          )}
          onKeyDown={
            (event) => {
              if (event.key === 'Enter') {
                this._addTask();
              }
            }
          }
          placeholder='Add a new task'
          value={this.state.inputValue} />
        <PrimaryButton
          className='App-createTask-button'
          onClick={() => this._addTask()}>
          Add task
        </PrimaryButton>
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
                <Checkbox
                  checked={task.completed}
                  key={task.id}
                  label={task.title}
                  name={task.id}
                  onChange={(event, checked) => {
                    console.log(task.id);
                    this._toggleTaskCompleted(task.id)
                  }} />
              );
            }
          )
        }
      </div>
    );
  }

  _renderProgress() {
    return (
      <ProgressIndicator
        label='Your progress'
        description={`${this._TaskManager.getCompletedTaskCount()} of ${this._TaskManager.getTaskCount()} tasks completed`}
        percentComplete={this._TaskManager.getTasksPercentComplete()} />
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
