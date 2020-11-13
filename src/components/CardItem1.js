import React from "react";
import { styleCard } from "./styles/card";

export default (props) => {
  const classes = styleCard();

  return (
    <div className={classes.root}>
      <div className={classes.top}>
        <div className={classes.user}>
          <div className={classes.left}>
            <div className={classes.image}>
              <img className={classes.media} src={props.image} />
            </div>
          </div>
          <div className={classes.right}>
            <div className={classes.name}>{props.name}</div>
            <div className={classes.bookingTime}>{props.info1}</div>
          </div>
        </div>

        <div className={`${classes.booking} ${classes.sec}`}>
          <div>{props.info2}</div>
          <div className={classes.subtitle}>Info 2</div>
        </div>

        <div className={`${classes.persons} ${classes.sec}`}>
          <div>{props.info3}</div>
          <div className={classes.subtitle}>Info 3</div>
        </div>

        <div className={`${classes.buttons}`}>
          <button
            className={`${classes.button}`}
            style={{
              color: "red",
              border: "1px solid red",
              marginRight: "20px",
            }}
          >
            Button1
          </button>
          <button className={`${classes.button}`} style={{ color: "white", background: "#4f94e6" }}>
            Button2
          </button>
        </div>
      </div>
    </div>
  );
};
