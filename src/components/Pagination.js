import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
    display: "flex",
    justifyContent: "center",
    margin: "10px 0px",
  },
}));

export default function PaginationComponent(props) {
  const classes = useStyles();
  const handleChange = (event, value) => {
    props.handlePageClick(value);
  };

  return (
    <div className={classes.root}>
      <Pagination count={props.pageCount} page={props.currPage} onChange={handleChange} />
    </div>
  );
}
