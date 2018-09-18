import React, { Component } from 'react';
import {
  Fabric,
  Checkbox,
  TextField,
  PrimaryButton,
  Persona,
  PersonaSize,
  PersonaPresence,
  Pivot,
  PivotItem
} from 'office-ui-fabric-react/lib/';
import { initializeIcons } from 'office-ui-fabric-react/lib/Icons';

import TaskManager from './TaskManager';
import './App.css';


initializeIcons();

const examplePersona = {
  showSecondaryText: true,
  size: PersonaSize.size32,
  presence: PersonaPresence.online
};

class App extends Component {
  _TaskManager = new TaskManager();

  state = {
    tasks: this._TaskManager._tasks,
    inputValue: ''
  }

  render() {
    return (
      <Fabric className="App">
        <div className="App-header">
          <div className="App-titleBlock">
            <h1 className="App-title">Team Tasks</h1>
            <div className="App-description">
              <TextField
                borderless
                placeholder="Describe your list"
                />
            </div>
          </div>
          {this._renderCreateTask()}
          {this._renderPivot()}
        </div>
        <div className="App-main">
          {this._renderTaskList()}
        </div>
        <div className="App-footer">
          {this._renderProgress()}
        </div>
      </Fabric>
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
              let { personaProps } = task;
              let personaArgs = { ...personaProps, ...examplePersona };

              return (
                <div 
                  className='App-task' 
                  key={task.id}
                  onClick={() => {
                    this._toggleTaskCompleted(task.id)
                  }}
                >
                  <Checkbox
                    checked={task.completed}
                    label={task.title}
                    name={task.id}
                    onChange={(event, checked) => {
                      this._toggleTaskCompleted(task.id)
                    }}
                  />
                  <div className="App-persona">
                    <div className="ms-PersonaExample">
                    <Persona {...personaArgs} />
                    </div>
                  </div>
                </div>
              );
            }
          )
        }
      </div>
    );
  }

  _renderProgress() {
    return (
      '[Progress goes here]'
    );
  }

  _renderPivot() {
    return(
    <div className="App-pivot">
      <Pivot>
        <PivotItem
          headerText="All Tasks"
          linkText="I am deprecated. &quot;headerText&quot; overwrites me"
          headerButtonProps={{
            'data-order': 1,
            'data-title': 'My Files Title'
          }}
          >
        </PivotItem>
        <PivotItem linkText="Completed">
        </PivotItem>
      </Pivot>
    </div>
    )
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