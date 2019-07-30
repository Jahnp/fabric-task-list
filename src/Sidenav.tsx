import * as React from "react";
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
