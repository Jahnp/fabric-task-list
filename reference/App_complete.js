import React, { Component } from "react";
import {
  Fabric,
  DefaultButton,
  IconButton,
  Checkbox,
  Dialog,
  DialogType,
  DialogFooter,
  TextField,
  PrimaryButton,
  Persona,
  PersonaSize,
  PersonaPresence,
  Pivot,
  PivotItem,
  Customizer
} from "office-ui-fabric-react/lib/";
import { initializeIcons } from "office-ui-fabric-react/lib/Icons";

import { FluentCustomizations } from "@uifabric/fluent-theme";

import TaskManager from "./TaskManager";
import "./App.css";

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
    inputValue: "",
    hideDeleteDialog: true,
    taskToDelete: null
  };

  render() {
    return (
      <Customizer {...FluentCustomizations}>
        <Fabric className="App">
          <div className="App-header">
            <div className="App-titleBlock">
              <span className="App-title">Team Tasks</span>
              <div className="App-description">
                <TextField borderless placeholder="Describe your list" />
              </div>
            </div>
            {this._renderCreateTask()}
            {this._renderPivot()}
          </div>
          <div className="App-main">{this._renderTaskList()}</div>
          <div className="App-footer">{this._renderProgress()}</div>
          {this._renderDeleteDialog()}
        </Fabric>
      </Customizer>
    );
  }

  _renderCreateTask() {
    return (
      <div className="App-createTask">
        <TextField
          className="App-createTask-field"
          onChange={event =>
            this.setState({
              inputValue: event.target.defaultValue
            })
          }
          onKeyDown={event => {
            if (event.key === "Enter") {
              this._addTask();
            }
          }}
          placeholder="Add a new task"
          value={this.state.inputValue}
        />
        <PrimaryButton
          className="App-createTask-button"
          onClick={() => this._addTask()}
        >
          Add task
        </PrimaryButton>
      </div>
    );
  }

  _renderTaskList() {
    return (
      <div className="App-taskList">
        {this.state.tasks.map(task => {
          let { personaProps } = task;
          let personaArgs = { ...personaProps, ...examplePersona };

          return (
            <div
              className="App-task"
              key={task.id}
              onClick={() => {
                this._toggleTaskCompleted(task.id);
              }}
            >
              <Checkbox
                checked={task.completed}
                label={task.title}
                name={task.id}
                onChange={(event, checked) => {
                  this._toggleTaskCompleted(task.id);
                }}
              />
              <div className="App-persona">
                <div className="ms-PersonaExample">
                  <Persona {...personaArgs} />
                </div>
              </div>
              <IconButton
                className="App-deleteTask"
                iconProps={{ iconName: "Delete" }}
                title="Delete task"
                ariaLabel="Delete task"
                onClick={event => {
                  event.stopPropagation();
                  this._confirmDeleteTask(task.id);
                }}
              />
            </div>
          );
        })}
      </div>
    );
  }

  _renderProgress() {
    return "[Progress goes here]";
  }

  _renderPivot() {
    return (
      <div className="App-pivot">
        <Pivot>
          <PivotItem
            headerText="All Tasks"
            linkText='I am deprecated. "headerText" overwrites me'
            headerButtonProps={{
              "data-order": 1,
              "data-title": "My Files Title"
            }}
          />
          <PivotItem linkText="Completed" />
        </Pivot>
      </div>
    );
  }

  _renderDeleteDialog() {
    return (
      <Dialog
        hidden={this.state.hideDeleteDialog}
        onDismiss={this._closeDeleteDialog}
        dialogContentProps={{
          type: DialogType.normal,
          title: "Delete task",
          subText:
            "Are you sure you want to delete this task? This cannot be undone."
        }}
        modalProps={{
          isBlocking: false
        }}
      >
        <DialogFooter>
          <PrimaryButton
            onClick={() => {
              this._handleConfirmDeleteClick(this.state.taskToDelete);
            }}
            text="Ok"
          />
          <DefaultButton
            onClick={() => this._handleCancelDeleteClick()}
            text="Cancel"
          />
        </DialogFooter>
      </Dialog>
    );
  }

  _addTask() {
    this._TaskManager.addTask(this.state.inputValue);

    this.setState({
      tasks: this._TaskManager.getTasks(),
      inputValue: ""
    });
  }

  _toggleTaskCompleted(taskId) {
    this._TaskManager.toggleTaskCompleted(taskId);

    this.setState({
      tasks: this._TaskManager.getTasks()
    });
  }

  _confirmDeleteTask(taskId) {
    this._showDeleteDialog();

    this.setState({
      taskToDelete: taskId
    });
  }

  _showDeleteDialog = () => {
    this.setState({ hideDeleteDialog: false });
  };

  _closeDeleteDialog = () => {
    this.setState({ hideDeleteDialog: true });
  };

  _handleConfirmDeleteClick(taskId) {
    this._TaskManager.deleteTask(taskId);

    this.setState({
      taskToDelete: null,
      tasks: this._TaskManager.getTasks()
    });

    this._closeDeleteDialog();
  }

  _handleCancelDeleteClick() {
    this._closeDeleteDialog();
  }
}

export default App;
