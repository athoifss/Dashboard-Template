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
            <div className={classes.bookingTime}>{props.info2}</div>
          </div>
        </div>

        <div className={`${classes.booking} ${classes.sec}`}>
          <div>{props.info1}</div>
          <div className={classes.subtitle}>Booking Id</div>
        </div>

        <div className={`${classes.persons} ${classes.sec}`}>
          {props.info3}
          <div className={classes.subtitle}>Persons</div>
        </div>

        <div className={`${classes.estimated} ${classes.sec}`}>
          <div>{`${props.info4}`}</div>
          <div className={classes.subtitle}>Info 4</div>
        </div>

        <div className={`${classes.buttons}`}>
          <button className={classes.button} style={{ background: "#4f94e6", color: "white" }}>
            Start Now
          </button>
        </div>
      </div>
    </div>
  );
};
