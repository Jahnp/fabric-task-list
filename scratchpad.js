// Import FluentCustomizations
import { FluentCustomizations } from '@uifabric/experiments/lib/components/fluent/FluentCustomizations';

// Customizer
<Customizer {...FluentCustomizations}>
</Customizer>

// ProgressIndicator
<ProgressIndicator
  label='Your teams progress'
  description={`${this._TaskManager.getCompletedTaskCount()} of ${this._TaskManager.getTaskCount()} tasks completed`}
  percentComplete={this._TaskManager.getTasksPercentComplete()} />
