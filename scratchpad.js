// Code snippets for adding a Fabric React component and applying Fluent styles

// Step 1: Import and add add ProgressIndicator
<ProgressIndicator
  label='Your teams progress'
  description={`${this._TaskManager.getCompletedTaskCount()} of ${this._TaskManager.getTaskCount()} tasks completed`}
  percentComplete={this._TaskManager.getTasksPercentComplete()} />

// Step 2: Import FluentCustomizations
import { FluentCustomizations } from '@uifabric/experiments/lib/components/fluent/FluentCustomizations';

// Step 3: Wrap app in <Customizer> and pass FluentCustomizations
<Customizer {...FluentCustomizations}>
  <App />
</Customizer>

// Step 4: Open App.scss to make Fabric Core changes.

