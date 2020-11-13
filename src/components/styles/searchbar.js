import { makeStyles } from "@material-ui/core/styles";

export const styleSearchbar = makeStyles((theme) => ({
  root: {
    paddingTop: "10px",
    display: "flex",
    // border: "1px solid red",
    position: "relative",
  },
  search: {
    position: "relative",
    // border: "1px solid blue",
  },
  searchIcon: {
    width: theme.spacing(7),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
    border: "1px solid rgba(0,0,0,0.2)",
    borderRadius: "5px",
    width: "200px",
    fontSize: "0.9em",
    background: "white",
  },
  inputInput: {
    // background: "red",
    padding: theme.spacing(1, 1, 1, 6),
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: 120,
      "&:focus": {
        width: 200,
      },
    },
  },
  refresh: {
    color: "grey",
    border: "1px solid rgba(0,0,0,0.2)",
    padding: "3px",
    width: "30px",
    height: "33px",
    borderRadius: "5px",
    background: "white",
    position: "relative",
  },
  filterBox: {
    marginLeft: "auto",
  },
  filterButtonBox: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    color: "grey",
    border: "1px solid rgba(0,0,0,0.2)",
    borderRadius: "5px",
    width: "100px",
    fontSize: "0.9em",
    background: "white",
    cursor: "pointer",
    padding: "5px",
    "& div": {
      paddingLeft: "5px",
    },
  },
  filterContainer: {
    position: "absolute",
    right: "10px",
    top: "50px",
  },
  show: {
    display: "flex",
  },
  hide: {
    display: "none",
  },
}));
