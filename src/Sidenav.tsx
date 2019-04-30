import * as React from "react";
import { getTheme } from "office-ui-fabric-react";
import { Sidebar } from "@uifabric/experiments";

export const Sidenav = (props: any) => {
  return (
    <Sidebar
      collapsible={true}
      theme={getTheme()}
      collapseButtonAriaLabel={"sitemap"}
      footerItems={[
        {
          key: "basic-collapsible-footer-item",
          name: "Settings",
          iconProps: { iconName: "Settings" }
        }
      ]}
      items={[
        {
          key: "collapsible-example-item1",
          name: "Basic Inputs",
          iconProps: { iconName: "KeyboardClassic" },
          active: true
        },
        {
          key: "collapsible-example-item2",
          name: "Navigation",
          iconProps: { iconName: "MapPin" },
          active: false
        },
        {
          key: "collapsible-example-item3",
          name: "Content",
          iconProps: { iconName: "CustomList" },
          active: false
        },
        {
          key: "collapsible-example-item4",
          name: "Pickers",
          iconProps: { iconName: "CheckList" },
          active: false
        },
        {
          key: "collapsible-example-item5",
          name: "Progress",
          iconProps: { iconName: "ProgressRingDots" },
          active: false
        },
        {
          key: "collapsible-example-item6",
          name: "Surfaces",
          iconProps: { iconName: "Message" },
          active: false
        },
        {
          key: "collapsible-example-item7",
          name: "Layout",
          iconProps: { iconName: "Tiles" },
          active: false
        },
        {
          key: "collapsible-example-item8",
          name: "Accessibility",
          iconProps: { iconName: "EaseOfAccess" },
          active: false
        }
      ]}
    />
  );
};
