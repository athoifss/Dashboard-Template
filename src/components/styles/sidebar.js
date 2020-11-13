import { makeStyles } from "@material-ui/core/styles";

export const styleSidebar = makeStyles((theme) => {
  return {
    sidebar: {
      paddingLeft: "10px",
    },
    inactive: {
      background: "blue",
    },
    active: {
      background: "red",
    },
    toolbar: theme.mixins.toolbar,
    textBottomContainer: {
      fontSize: "1.0em",
      marginTop: "auto",
      marginBottom: "30px",
      display: "flex",
      flexDirection: "column",
      width: "100%",
      alignItems: "center",
    },
    textBottom: {
      color: "rgba(1,1,1,0.5)",
    },
  };
});

export const styleSidebarSubitem = makeStyles(() => ({
  root: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    borderBottom: "1px solid #eeeeee",
    height: "40px",
    margin: "0",
    width: "100% !important",
    position: "relative",
  },
  notif: {
    width: "20px",
    height: "20px",
    background: "red",
    color: "white",
    borderRadius: "50%",
    textAlign: "center",
    lineHeight: "20px",
    fontSize: "10px",
    marginLeft: "10px",
  },
  link: {
    display: "flex",
    textDecoration: "none",
    color: "#333333",

    "&:hover": {
      color: "#333333",
      background: "#eeeeee",
    },
    "&:visited": {
      color: "#333333",
    },
    width: "100%",
    height: "100%",
    paddingLeft: "53px",
    paddingRight: "20px",
    alignItems: "center",
  },

  bookingCount: {
    display: "inline-block",
    marginLeft: "10px",
    width: "20px",
    height: "20px",
    textAlign: "center",
    lineHeight: "20px",
    borderRadius: "50%",
    color: "white",
    fontSize: "0.9em",
    position: "absolute",
    right: "22px",
  },
  title: {
    display: "inline-block",
    width: "150px",
  },
  active: {
    background: "#eeeeee",
  },
  inactive: {
    background: "inherit",
  },
}));

export const styleSidebarItem = makeStyles(() => ({
  root: {
    display: "flex",
    flexDirection: "column",
    width: "100% !important",
    cursor: "pointer",
  },
  active: {
    background: "rgba(1,1,1,0.05)",
    borderTop: "none !important",
    fontWeight: "bold",
  },
  inactive: {
    background: "inherit",
  },
  titleBar: {
    display: "flex",
    alignItems: "center",
    padding: "0px 20px",
    height: "50px",
    borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
  },
  title: {
    width: "100%",
  },
  icon: {
    color: "#4f94e6",
    marginRight: "10px",
  },
  "@keyframes ShowAnim": {
    from: { transform: "translateY(-10px)" },
    to: { transform: "translateY(0px)" },
  },
  show: {
    display: "block",
    animation: "$ShowAnim 2s",
  },
  hide: {
    display: "none",
  },
}));
