# Fabric Task List

![Screenshot of the completed task list app](https://raw.githubusercontent.com/Jahnp/fabric-task-list/master/screenshot.png)
## About this tutorial

You'll be creating a simple task list using [Office UI Fabric React](http://dev.office.com/fabric). Fabric React allows you to build your application with the same components that Microsoft uses across Office and Office 365. In this tutorial, you'll use components like TextField, Checkbox, and ProgressIndicator to quickly create an application that fits seamlessly into the Office experience.

So that you can focus on the fundamentals of working with Fabric React, rather than setting up and using a build system, we've bootstrapped this project using [Create React App](https://github.com/facebookincubator/create-react-app). This tool is highly recommended for quickly starting React apps, including those that use Fabric React. For more details, see the [Create React App README](/blob/master/CREATE-REACT-APP.md).

## Prerequisites

This tutorial is aimed at developers of all skill levels. You'll be provided with all of the code you need and step-by-step instructions on how to assemble the app. If you don't understand something, refer to the [resources](#resources) below to learn more.

To get started, you'll need:

- [Git](https://git-scm.com/) to clone this repository
- [Node.js with npm](https://nodejs.org/en/download/) to install the dependencies

## Getting set up
Open your terminal or command prompt and navigate to the folder where you want to work on this project. You can then clone the repository:

```
git clone https://github.com/mikewheaton/fabric-task-list.git
```

That command copied all of the files from this repository into a subfolder named `fabric-task-list`. To move into that folder, run:

```
cd fabric-task-list
```

Before you can start the app, you'll first need to install all of the NPM dependencies. If you open `package.json` you'll see that Fabric React is one of those dependencies. To download and install everything you'll need to build the app, run:

```
npm install
```

To start the app, run:

```
npm start
```

This will build the app and launch it in your default browser. As you make changes to files throughout this tutorial, the app will automatically rebuild and update in the browser.

We've included a basic app structure to get you started quickly, with text in square brackets indicating a placeholder for a Fabric React component. By the end of this tutorial, you will have replaced each of those placeholders with a component and wired those components together into a working app.

## Displaying a Checkbox for each task

You'll see a list of three tasks (e.g. [Wash the car]) in the middle of the app. These tasks come from `TaskManager.js`, which pre-populates the task list and provides basic functions for getting, adding, and updating tasks. Let's display the tasks using a [Checkbox](http://dev.office.com/fabric#/components/checkbox) component, which will allow us to mark a task as completed later.

Before we can use the Checkbox, we first need to import it. At the top of `App.js`, modify the import statement for Fabric React to include the Checkbox:

```diff
  import {
    Fabric,
+   Checkbox
  } from 'office-ui-fabric-react/lib/';
```

Note that the Fabric component is included by default. This component must be a parent of all other Fabric React components, as it's responsible for things like managing focus state for keyboard users. In this app, you'll see it used at the top of the `render` function.

The `_renderTaskList` function returns a `<div>` containing all of the tasks. Modify the `map` method to return a list of Checkbox components, rather than plain text:

```diff
  this.state.tasks.map(
    task => {
      return (
-       <div>[{ task.title }]</div>
+       <Checkbox
+         checked={ task.completed }
+         key={ task.id }
+         label={ task.title }
+         name={ task.id }
+         onChange={(event, checked) => this._toggleTaskCompleted(event.target.name) } />
      );
    }
  )
```

What's going on in this code? The app has a state variable of `tasks`, which contains an array of tasks. Each task has the properties `id`, `title`, and `completed`. Any time this array is modified, React will re-render our application to show the updated tasks. Using the array's [map method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map?v=example), we convert each task object into a Checkbox component. Let's examine each of the props in use:

- `checked`
  - Whether the Checkbox is checked or not. This comes from the task's `completed` property.
- `label`
  - The text shown for the Checkbox. This comes from the task's `title` property.
- `onChange`
  - Called whenever the user checks or unchecks a box. Note how we're using the `name` property to determine which box was changed, so that we update the right task.

With that change made, save the file and your browser should reload with Checkbox components.

## Adding new tasks

Let's make it so that users can add new tasks to the list. To do this, we'll need to use two Fabric React components. First, we'll need a TextField to allow them to input the task name. Second, a PrimaryButton to submit the task and have it added to the list.

We can import these components the same as we did for Checkbox above. At the top of `App.js`, modify the import statement for Fabric React to include both:

```diff
  import {
    Fabric,
    Checkbox,
+   TextField,
+   PrimaryButton
  } from 'office-ui-fabric-react/lib/';
```

Both of these components will be placed inside the `_renderCreateTask` function, which returns a `<div>` containing the form to create a new task. Let's modify that function to include a basic TextField:

```diff
  _renderCreateTask() {
    return (
      <div className="App-createTask">
-       [Text field to describe the task.]
+       <TextField
+         className='App-createTask-field'
+         onChanged={ (value) => (
+           this.setState({
+             inputValue: value
+           })
+         ) }
+         onKeyDown={
+           (event) => {
+             if (event.key === 'Enter') {
+               this._addTask();
+             }
+           }
+         }
+         placeholder='Add a new task' 
+         value={ this.state.inputValue } />
        [Button to add the task.]
      </div>
    );
  }
```

With this change, we've added a TextField component with a few props:

- `className`
  - Most Fabric React components allow you to pass in a CSS class name, which is useful for applying your own custom styles.
- `placeholder`
  - This instructional text will be shown before the user enters text.
- `value`
  - Text entered by the user, or set by the app.
- `onChanged`
  - Whenever the text value changes, we update the app's state to hold the new value.
- `onKeyDown`
  - This function is called whenever the user presses a key in the TextField. In this case, we listen for the enter key to be pressed and add the task.

Now let's add a button to create the task. There are several types of [Buttons provided by Fabric React](http://dev.office.com/fabric#/components/button) to choose from. For this app, we'll use the PrimaryButton component so that we get a very prominent button.

Modify the `_renderCreateTask` function to include the button:

```diff
  _renderCreateTask() {
    return (
      <div className="App-createTask">
        <TextField ... />
-       [Button to add the task.]
+       <PrimaryButton
+         className='App-createTask-button'
+         onClick={ () => this._addTask() }>
+         Add task
+       </PrimaryButton>
      </div>
    );
  }
```

The only property to note on the button is `onClick`, which takes a function that will be called whenever the button is clicked. Here we have it call the `_addTask` function to add a task, using the text value stored in our app's state.

## Showing progress with ProgressIndicator

We now have a working task list, with the ability to add items and mark items and completed. To make this example a little more interesting, let's use a [ProgressIndicator component](http://dev.office.com/fabric#/components/progressindicator) to show the user how they are doing.

Once again, we modify the import statement at the top of `App.js` to include the component we want to use:

```diff
  import {
    Fabric,
    Checkbox,
    TextField,
    PrimaryButton,
+   ProgressIndicator
  } from 'office-ui-fabric-react/lib/';
```

With that imported, we can update the `_renderProgress` function to show the ProgressIndicator:

```diff
  _renderProgress() {
    return (
-     <div>[Progress indicator]</div>
+     <ProgressIndicator
+       label='Your progress'
+       description={ `${this._TaskManager.getCompletedTaskCount()} of ${this._TaskManager.getTaskCount()} tasks completed` }
+       percentComplete={ this._TaskManager.getTasksPercentComplete() } />
    );
  }
```
## Conclusion and next steps
That's all there is to it! You've now built a simple app using five Fabric React components. To continue learning, we invite you to:

- Browse the full list of [Fabric React components](http://dev.office.com/fabric#/components) that you can use in your apps.
- Add additional functionality, such as a [MessageBar](http://dev.office.com/fabric#/components/messagebar) to display a success message when all of the tasks are complete.
- Explore the [styles included in Fabric Core](http://dev.office.com/fabric#/styles) that you can use to add animations, colors, icons, fonts, and more that allow your app to fit in seamlessly with the rest of Office.
- View [Fabric React's GitHub repo](https://github.com/OfficeDev/office-ui-fabric-react) to see what's new in recent releases and to file an issue should you run into any difficulty.
- Follow [Fabric on Twitter](https://twitter.com/officeuifabric) for all of the latest updates.
