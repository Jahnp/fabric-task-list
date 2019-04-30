// Code snippets for adding a Fabric React component and applying Fluent styles

// Add Contextual Menu to the <IconButton />
menuIconProps={{iconName: "More"}}
menuProps={{
  items: [
    {
      key: "addToDay",
      name: "Add to My Day",
      iconProps: {
        iconName: "SunAdd"
      }
    },
    {
      key: "markAsImportant",
      name: "Mark as important",
      iconProps: {
        iconName: "FavoriteStar"
      }
    },
    {
      key: "markAsCompleted",
      name: "Mark as completed",
      iconProps: {
        iconName: "CheckMark"
      }
    },
    {
      key: "setDueDate",
      name: "Set due date",
      iconProps: {
        iconName: "Calendar"
      }
    },
    {
      key: 'divider_1',
      itemType: ContextualMenuItemType.Divider
    },        
    {
      key: "deleteTask",
      name: "Delete task",
      iconProps: {
        iconName: "Delete"
      },
      onClick: () => this._confirmDeleteTask(task.id)
    }
  ]
}}



// Add Sidebar control
import { getTheme } from "office-ui-fabric-react";
import { Sidebar } from "@uifabric/experiments";

export const Sidenav = (props: any) => {
  return (
    <Sidebar
      collapsible={true}
      theme={getTheme()}
      collapseButtonAriaLabel={"sitemap"}
      items={[
        {
          key: "collapsible-example-item1",
          name: "My Day",
          iconProps: { iconName: "Sunny" },
          active: true
        },
        {
          key: "collapsible-example-item2",
          name: "Important",
          iconProps: { iconName: "FavoriteStar" },
          active: false
        },
        {
          key: "collapsible-example-item3",
          name: "Tasks",
          iconProps: { iconName: "Home" },
          active: false
        },
        {
          key: "collapsible-example-item4",
          name: "Lists",
          iconProps: { iconName: "BulletedList" },
          active: false
        }
      ]}
      footerItems={[
        {
          key: "footer-settings",
          name: "Settings",
          iconProps: { iconName: "Settings" }
        }
      ]}      
    />
   );
};




// Step 1: Import and add add ProgressIndicator
<ProgressIndicator
  label="Your teams progress"
  description={`${this._TaskManager.getCompletedTaskCount()} of ${this._TaskManager.getTaskCount()} tasks completed`}
  percentComplete={this._TaskManager.getTasksPercentComplete()}
/>;

// Step 2: Import FluentCustomizations
import { FluentCustomizations } from "@uifabric/fluent-theme";

// Step 3: Wrap app in <Customizer> and pass FluentCustomizations
<Customizer {...FluentCustomizations}>
  <App />
</Customizer>;

// Step 4: Open App.scss to make Fabric Core changes.
