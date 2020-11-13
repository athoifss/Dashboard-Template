import React from "react";
import SidebarItem from "./SidebarItem";
import SidebarSubitem from "./SidebarSubitem";
import Collapse from "@material-ui/core/Collapse";
import { styleSidebar } from "./styles/sidebar";

export default (props) => {
  const classes = styleSidebar();
  return (
    <>
      <div className={`${classes.toolbar} ${classes.sidebar}`} />
      <Collapse timeout={300} in={props.sidebarOpenStatus.item1} collapsedHeight={50}>
        <SidebarItem
          open={props.sidebarOpenStatus.item1}
          clickHandler={props.handleChangeSidebarStatus.bind(this, "item1")}
          title="Sidebar Title 1"
          status={props.sidebarStatus["item1"]}
        >
          <SidebarSubitem
            status={props.sidebarStatus["item1sub1"]}
            title="Subheader"
            route="item1/sub1"
          />
          <SidebarSubitem
            status={props.sidebarStatus["item1sub2"]}
            title="Subheader"
            route="item1/sub2"
          />
        </SidebarItem>
      </Collapse>

      <Collapse timeout={300} in={props.sidebarOpenStatus.item2} collapsedHeight={50}>
        <SidebarItem
          open={props.sidebarOpenStatus.item2}
          clickHandler={props.handleChangeSidebarStatus.bind(this, "item2")}
          title="Sidebar Title 2"
          status={props.sidebarStatus["item2"]}
        >
          <SidebarSubitem
            status={props.sidebarStatus["item2sub1"]}
            title="Subitem 2"
            route="item2/sub1"
          />
        </SidebarItem>
      </Collapse>

      <div className={classes.textBottomContainer}>
        <div className={classes.textBottom}>Lorem Ipsum Pvt Ltd</div>
        <div className={classes.textBottom}>All rights reserved</div>
      </div>
    </>
  );
};
