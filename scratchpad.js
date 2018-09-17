// ------------------------------------
// WITH CUSTOMIZER
// ------------------------------------

<Customizer {...FluentCustomizations}>
  <Fabric className="App">
  <div className="App-header">
    <div>
      <h1 className="App-title">Team Tasks</h1>
      <div className="App-description">
      <TextField
        borderless
        placeholder="Describe your list"
        />
      </div>
        <IconButton
          className='App-close'
          iconProps={{ iconName: 'Cancel' }}
          title="Cancel"
          ariaLabel="Cancel"/>
    </div>
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
  </div>
    <div className="App-main">
      {this._renderCreateTask()}
      {this._renderTaskList()}
    </div>
    <div className="App-footer">
      {this._renderProgress()}
    </div>
  </Fabric>
</Customizer>

// ------------------------------------
// WITHOUT CUSTOMIZER
// ------------------------------------

<Fabric className="App">
<div className="App-header">
  <div>
    <h1 className="App-title">Team Tasks</h1>
    <div className="App-description">
    <TextField
      borderless
      placeholder="Describe your list"
      />
    </div>
      <IconButton
        className='App-close'
        iconProps={{ iconName: 'Cancel' }}
        title="Cancel"
        ariaLabel="Cancel"/>
  </div>
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
</div>
  <div className="App-main">
    {this._renderCreateTask()}
    {this._renderTaskList()}
  </div>
  <div className="App-footer">
    {this._renderProgress()}
  </div>
</Fabric>


// ------------------------------------
// ProgressIndicator
// ------------------------------------
<ProgressIndicator
  label='Your teams progress'
  description={`${this._TaskManager.getCompletedTaskCount()} of ${this._TaskManager.getTaskCount()} tasks completed`}
  percentComplete={this._TaskManager.getTasksPercentComplete()} />
