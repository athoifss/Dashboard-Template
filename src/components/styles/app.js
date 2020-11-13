import { makeStyles } from "@material-ui/core/styles";
const drawerWidth = 300;
const gray = "rgba(0,0,0,0.12)";

export const styleApp = makeStyles((theme) => {
  return {
    root: {
      display: "flex",
      width: "100%",
      background: "#f9f9f9  !important",
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      backgroundColor: "white",
      color: "black",
      boxShadow: "none",
      borderBottom: `1px solid ${gray}`,
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    content: {
      flexGrow: 1,
    },

    rootMain: {
      margin: "70px 30px",
      marginBottom: 0,
      padding: 0,
      position: "relative",
      width: "100%",
      minWidth: "700px",
      maxWidth: "1100px",
    },
    titleMain: {
      height: "40px",
      color: "grey",
      marginBottom: 0,
    },
    router: {
      height: "500px",
      width: "100%",
      marginTop: "10px",
    },
    userDetails: {
      position: "fixed",
      right: "0px",
      top: "65px",
      width: "275px",
      "& div": {
        padding: "5px",
        cursor: "pointer",
        textAlign: "center",
      },
      "& div:hover": {
        background: "#4f94e6",
        color: "white",
      },
    },
    "@keyframes userDetailsShowAnim": {
      from: { transform: "translateY(-50px)" },
      to: { transform: "translateY(0px)" },
    },
    show: {
      display: "block",
      animation: "$userDetailsShowAnim 0.1s",
      border: "1px solid #4f94e6",
      borderTop: "none",
      color: "#2f2f2f",
    },
    hide: {
      display: "none",
    },
    toolbar: theme.mixins.toolbar,
  };
});
