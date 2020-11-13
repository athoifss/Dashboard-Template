import { makeStyles } from "@material-ui/core/styles";

export const styleCard = makeStyles(() => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: "90%",
    marginBottom: "10px",
    border: "1px solid rgba(0,0,0,0.15)",
    borderRadius: "7px",
    color: "black",
    padding: "15px 20px",
    background: "white",
  },
  sec: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderRight: "2px solid rgba(0,0,0,0.05)",
    height: "45px",
  },
  subtitle: {
    color: "grey",
    fontSize: "0.9em",
  },
  top: {
    display: "flex",
    flexDirection: "row",
  },
  user: {
    display: "flex",
    alignItems: "center",
    borderRight: "2px solid rgba(0,0,0,0.05)",
    width: "200px",
    height: "45px",
  },
  right: {
    display: "flex",
    flexDirection: "column",
    // alignItems: "center",
  },
  bookingTime: {
    fontSize: "0.8em",
    color: "grey",
  },
  image: {
    borderRadius: "50%",
    width: "40px",
    height: "40px",
    background: "grey",
    marginRight: "15px",
  },
  media: {
    width: "100%",
    height: "100%",
    borderRadius: "50%",
  },
  booking: {
    width: "160px",
  },
  persons: {
    width: "70px",
  },
  estimated: {
    width: "230px",
    borderRight: "none",
  },
  spent: {
    width: "230px",
    borderRight: "none",
  },
  buttons: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "auto",
  },
  button: {
    border: "none",
    background: "none",
    width: "100px",
    borderRadius: "5px",
    height: "33px",
    cursor: "pointer",
  },
  show: {
    display: "block",
  },
  hide: {
    display: "none",
  },
  bottom: {
    marginTop: "10px",
  },
  food: {
    paddingTop: "20px",
  },
  foodOrder: {
    display: "flex",
    flexDirection: "column",
    paddingTop: "10px",
  },
  foodItems: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  foodItemTop: {
    display: "flex",
  },
  foodItem: {
    display: "flex",
    marginRight: "5px",
    width: "250px",
    flexDirection: "column",
    padding: "5px 0",
  },
  foodItemImg: {
    width: "40px",
    height: "40px",
    marginRight: "10px",
    borderRadius: "10px",
  },
  foodHeader: {
    color: "rgba(1,1,1,0.6)",
    fontSize: "0.9em",
    cursor: "pointer",
    textTransform: "uppercase",
  },
  foodItemDetailsBottom: {
    color: "rgba(1,1,1,0.6)",
  },
  foodPayHeader: {
    paddingTop: "5px",
    paddingBottom: "2px",
    fontSize: "0.9em",
    color: "rgba(1,1,1,0.6)",
    textTransform: "uppercase",
  },
  foodPayCost: {
    fontSize: "1.1em",
  },
}));
