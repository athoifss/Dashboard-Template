import React, { useEffect } from "react";
import CardItem1 from "./CardItem1";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexDirection: "column",
    paddingBottom: "50px",
  },
  nothingText: {
    color: "rgba(1,1,1,0.3)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: "100px",
  },
}));

export default (props) => {
  const classes = useStyles();

  useEffect(() => {
    props.changeNav(0);
    props.setSidebar("item1Sub1");
  }, []);

  return (
    <div className={classes.root}>
      {props.state["item1"].length === 0 ? (
        <div className={classes.nothingText}>Nothing to Show</div>
      ) : (
        <>
          {props.state["item1"].map((item) => {
            return <CardItem1 {...item} />;
          })}
        </>
      )}
    </div>
  );
};
