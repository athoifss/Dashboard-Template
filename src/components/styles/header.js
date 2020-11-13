import { makeStyles } from "@material-ui/core/styles";

export const styleHeader = makeStyles((theme) => {
  return {
    header: {
      display: "flex",
      flexDirection: "row",
      width: "100vw",
      alignItems: "center",
    },
    logo: {
      width: "300px",
    },
    notificationBar: {
      width: "450px",
      position: "relative",
      marginLeft: "auto",
      background: "white",
      zIndex: "100",
    },
    borderRight: {
      width: "1px",
      background: "#2f2f2f50",
      height: "30px",
    },
    userProfile: {
      width: "300px",
      paddingLeft: "10px",
      display: "flex",
      flexDirection: "column",
    },
    profileTop: {
      display: "flex",
      alignItems: "center",
    },

    userImage: {
      width: "100%",
      height: "auto",
      borderRadius: "50%",
    },
    imageContainer: {
      width: "50px",
      height: "50px",
      marginRight: "10px",
    },
  };
});
