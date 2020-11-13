import React, { useState } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";

import Item1Container from "./Item1Container";
import Item2Container from "./Item2Container";
import Sidebar from "./Sidebar";
import Header from "./Header";

import { styleApp } from "./styles/app";

export default (props) => {
  const classes = styleApp();
  const [sidebarStatus, setSidebarStatus] = useState({
    item1: true,
    item2: false,
    item1Sub1: false,
    item1Sub2: false,
    item1Sub3: false,
    item2: false,
    item2Sub1: false,
    item2Sub2: false,
  });

  const [sidebarOpenStatus, setSidebarOpenStatus] = useState({
    item1: true,
    item2: true,
  });

  function handleSidebarStatus() {
    let arrScreen = window.location.href.split("/");
    let itemUrl = arrScreen[3];
    let subItemUrl = `${arrScreen[3]}${arrScreen[4]}`;

    let newSidebarStatus = {
      item1: false,
      item2: false,
      item1sub1: false,
      item1sub2: false,
      item1sub3: false,
      item2: false,
      item2sub1: false,
      item2sub2: false,
    };

    newSidebarStatus[itemUrl] = true;
    newSidebarStatus[subItemUrl] = true;
    setSidebarStatus(newSidebarStatus);
  }

  function handleChangeSidebarStatus(sidebarItem) {
    let newData = { ...sidebarOpenStatus };
    if (!sidebarOpenStatus[sidebarItem]) {
      newData[sidebarItem] = true;
      setSidebarOpenStatus(newData);
      console.log(newData);
    } else {
      newData[sidebarItem] = false;
      setSidebarOpenStatus(newData);
    }
  }

  return (
    <Router>
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <Header />
          </Toolbar>
        </AppBar>

        <Drawer
          className={classes.drawer}
          variant="permanent"
          classes={{ paper: classes.drawerPaper }}
        >
          <Sidebar
            sidebarOpenStatus={sidebarOpenStatus}
            sidebarStatus={sidebarStatus}
            handleChangeSidebarStatus={handleChangeSidebarStatus}
          />
        </Drawer>

        <div className={`${classes.toolbar} ${classes.rootMain}`}>
          <Route
            path="/item2"
            render={() => {
              return <Item2Container setSidebar={handleSidebarStatus} />;
            }}
          />
          <Route
            path="/item1"
            render={() => {
              return <Item1Container setSidebar={handleSidebarStatus} />;
            }}
          />
          <Route exact path="/" render={() => <Redirect to="/item1/sub1" />} />
        </div>
      </div>
    </Router>
  );
};
