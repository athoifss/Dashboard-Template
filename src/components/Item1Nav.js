import React from "react";
import { useHistory } from "react-router-dom";

import { makeStyles, withStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

const AntTabs = withStyles({
  root: {
    borderBottom: "1px solid #e8e8e8",
  },
  indicator: {
    backgroundColor: "#1890ff",
  },
})(Tabs);

const AntTab = withStyles((theme) => ({
  root: {
    padding: 0,
    textTransform: "none",
    minWidth: 100,
    fontWeight: theme.typography.fontWeightRegular,
    marginRight: theme.spacing(4),
    "&:hover": {
      color: "#40a9ff",
      opacity: 1,
    },
  },
  selected: {},
}))((props) => <Tab disableRipple {...props} />);

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    zIndex: "-1",
  },
  padding: {
    padding: theme.spacing(3),
  },
  tabsContainer: {},
}));

export default (props) => {
  const classes = useStyles();
  const styleNavLink = {
    color: "#333333",
  };

  let history = useHistory();
  function navigateTo(route) {
    history.push(route);
  }

  return (
    <div className={classes.root}>
      <div className={classes.tabsContainer}>
        <AntTabs value={props.value} onChange={props.changeHandler} aria-label="ant example">
          <AntTab
            style={styleNavLink}
            onClick={navigateTo.bind(this, "/item1/sub1")}
            label="Subitem 1"
          />
          <AntTab
            style={styleNavLink}
            onClick={navigateTo.bind(this, "/item1/sub2")}
            label="Subitem 2"
          />
        </AntTabs>
      </div>
    </div>
  );
};
