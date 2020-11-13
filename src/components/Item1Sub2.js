import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core";
import CardItem2 from "./CardItem2";
import Pagination from "./Pagination";

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
    props.changeNav(1);
    props.setSidebar("item1Sub2");
  }, []);

  return (
    <div className={classes.root}>
      {props.state["item2"].length === 0 ? (
        <div className={classes.nothingText}>Nothing to Show</div>
      ) : (
        <>
          {props.state["item2"].map((item) => {
            return <CardItem2 {...item} />;
          })}
          <Pagination
            currPage={props.currPage}
            handlePageClick={props.handlePageClick}
            pageCount={props.pageCount}
          />
        </>
      )}
    </div>
  );
};
