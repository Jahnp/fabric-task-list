# Get started with Fabric React

In this tutorial, you'll be creating a simple to-do list web app using [Fabric React](http://dev.office.com/fabric). You'll use components like PeoplePicker, DatePicker, and Button to create a user interface that fits seamlessly into Office.

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). For more details, see create-react-app.md

## Prerequisites

To get started, you'll need: 

- [Node.js with npm](https://nodejs.org/en/download/) 
- The [Microsoft Connect Sample for Node.js](https://github.com/microsoftgraph/nodejs-connect-rest-sample). You'll use the **starter-project** folder in the sample files for this walkthrough.

## Creating an app
[Create React App](https://github.com/facebookincubator/create-react-app) is a quick way to set up a new React project with a build system, without having to deal with configuration.

```
npm install -g create-react-app

create-react-app fabric-react-todo
cd fabric-react-todo/

npm --save install office-ui-fabric-react
npm --save install office-ui-fabric-core

npm start
```

The web browser will open with a "Welcome to React" message displayed. You're ready to go!

## Importing Fabric React
Replace the contents of `App.js` with the following:

```
import React, { Component } from 'react';
import { Button } from 'office-ui-fabric-react/lib/Button';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="Tasks">
        <div className="Tasks-header">
          <h1>Fabric React Task List</h1>
        </div>
        <Button>Add task</Button>
      </div>
    );
  }
}

export default App;
```

Save the file and your browser will refresh automatically. The "Add task" button that you see is a Fabric React component. That's all there is to it! You'll use this button later when it's time to add a task to the list. Review the code you copied in to see how the components are imported and used.

## Show a list of to-dos
Let's add a simple array of tasks, which we can display and then later modify. Add this within your `App` class, above the `render()` function:

```
tasks = [
  {
    title: 'Create an app',
    done: false
  },
  {
    title: 'Import Fabric React',
    done: false
  },
  {
    title: 'Show a list of to-dos',
    done: false
  }
];
```

While we could simply loop through these and display them, Fabric's [List component](http://dev.office.com/fabric#/components/list) gives us some more advanced functionality that may be useful later on. Directly above the Button, add this code:

```
<List
  items={ this.tasks }
  onRenderCell={ (task) => (
    <div>{ task.title }</div>
  ) } />
```

We now have a basic list of tasks!

Let's improve the styling of this page. We'll start by adding a reference to Fabric Core, which contains the colors, fonts, icons, and other useful styles. In `public/index.html`, add the following to the `<head>`:

```
<link rel="stylesheet" href="https://static2.sharepointonline.com/files/fabric/office-ui-fabric-core/6.0.0/css/fabric.min.css">
```

Now replace the contents of `App.css` with the following:

```
.TaskApp {

}

.TaskApp-header {

}

.TaskList {

}

.Task {
  padding: 20px;
}

.Task--done {
  background: blue;
}
```

That's looking much better.

## Add a to-do

## Complete a to-do

## Next steps

- Browse the other [components](http://dev.office.com/fabric#/components) that you can use.
- Add additional functionality, such as...


## Resources

- [Office UI Fabric](http://dev.office.com/fabric)
- [Fabric React on GitHub](https://github.com/OfficeDev/office-ui-fabric-react)