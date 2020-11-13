import React from "react";
import { styleSidebarItem } from "./styles/sidebar";

import HomeIcon from "@material-ui/icons/Home";
import DashboardIcon from "@material-ui/icons/Dashboard";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import { IconButton } from "@material-ui/core";

export default (props) => {
  const classes = styleSidebarItem();
  const [Arrow, setArrow] = React.useState(KeyboardArrowUpIcon);
  const [status, setStatus] = React.useState(false);
  let Icon = HomeIcon;
  switch (props.title) {
    case "Sidebar Title 1":
      Icon = HomeIcon;
      break;
    case "Sidebar Title 2":
      Icon = DashboardIcon;
      break;
    default:
      Icon = HomeIcon;
  }

  React.useEffect(() => {
    if (props.status) {
      setStatus(classes.active);
    } else {
      setStatus(classes.inactive);
    }
  }, [props.status]);

  React.useEffect(() => {
    if (props.open) {
      setArrow(KeyboardArrowDownIcon);
    } else {
      setArrow(KeyboardArrowUpIcon);
    }
  }, [props.open]);
  return (
    <div className={`${classes.root}`}>
      <div onClick={props.clickHandler} className={`${classes.titleBar} ${status}`}>
        <span>
          <Icon className={classes.icon} />
        </span>
        <span className={classes.title}>{props.title}</span>
        <span>
          {props.title === "Contact WorkRe" ? null : (
            <IconButton onClick={props.clickHandler}>
              <Arrow style={{ marginTop: "4px", cursor: "pointer" }} />
            </IconButton>
          )}
        </span>
      </div>
      <div className={classes.display}>{props.children}</div>
    </div>
  );
};
