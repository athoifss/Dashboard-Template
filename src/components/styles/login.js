import { makeStyles } from "@material-ui/core/styles";

export const styleLogin = makeStyles(() => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "& input": {
      padding: "10px 10px",
      marginBottom: "20px",
      borderRadius: "5px",
      border: "1px solid rgba(1,1,1,0.2)",
      width: "100%",
      boxSizing: "border-box",
    },
    "& input[type='submit']": {
      cursor: "pointer",
      borderRadius: "5px",
      border: "none",
      background: "#4f94e6",
      color: "white",
      marginTop: "15px",
    },

    "& form": {
      padding: "20px 20px",
      paddingBottom: "0px",
      width: "350px",
      borderRadius: "5px",
      boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    },
  },
  error: {
    color: "red",
    padding: "0",
    marginBottom: "20px",
  },
  show: {
    display: "block",
  },
  hide: {
    display: "none",
  },
  logo: {
    marginBottom: "30px",
    fontSize: "2.0em",
    marginTop: "100px",
    color: "#2f3d5780",
  },
  signText: {
    textAlign: "left",
    marginRight: "auto",
    marginBottom: "20px",
    color: "rgba(1, 1, 1, 1)",
    fontSize: "1.1em",
  },
}));
