import { makeStyles } from "@material-ui/core/styles";

export const styleNotification = makeStyles(() => ({
  notifItemTime: {
    fontSize: "0.9em",
    color: "#5094e7",
  },
  notifIconContainer: {
    display: "flex",
    justifyContent: "flex-end",
    paddingRight: "20px",
  },
  notificationContainer: {
    position: "absolute",
    marginTop: "10px",
    width: "100%",
    background: "white",
    border: "1px solid rgba(1,1,1,0.3)",
    height: "400px",
    overflow: "auto",
    "& ul": {
      listStyleType: "none",
      padding: "0",
      margin: "0",
    },
    "&::-webkit-scrollbar": {
      width: "10px",
    },
    "&::-webkit-scrollbar-thumb": {
      background: "#5094e7",
      borderRadius: "10px",
    },
    "&::-webkit-scrollbar-thumb:hover": {
      background: "5094e7",
    },
    borderRadius: "10px",
    "& li": {
      display: "flex",
      alignItems: "center",
      width: "100%",
      padding: "0px 8px",
      cursor: "pointer",
      height: "70px",
      borderBottom: "1px solid white",
      "&:hover": {
        background: "#5094e7",
        color: "white !important",
      },
    },
    "& h3": {
      paddingLeft: "15px",
      color: "rgba(1,1,1,0.9)",
      margin: 0,
      padding: "15px 0",
      position: "sticky",
      top: 0,
      zIndex: 10,
      background: "white",
    },
    borderBottom: "1px solid rgba(1,1,1,0.2)",
  },
  notifItemLeft: {
    padding: "0 10px",
  },

  notifItemTimeHover: {
    color: "white",
  },
  unread: {
    background: "rgba(1,1,1,0.2)",
  },
  notifCount: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "25px",
    height: "25px",
    borderRadius: "50%",
    border: "1px solid red",
    position: "absolute",
    color: "white",
    background: "red",
    top: "-13px",
    right: "5px",
    fontSize: "0.9em",
  },
  top: {
    display: "flex",
  },
  notifItemCont: {
    display: "flex",
    alignItems: "center",
    height: "70px",
    border: "1px solid red",
    padding: "0px 15px",
  },
}));
