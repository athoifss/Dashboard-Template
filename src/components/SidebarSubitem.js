import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { styleSidebarSubitem } from "./styles/sidebar";

export default (props) => {
  const classes = styleSidebarSubitem();
  const [status, setStatus] = React.useState(classes.inactive);

  useEffect(() => {
    if (props.status) {
      setStatus(classes.active);
    } else {
      setStatus(classes.inactive);
    }
  }, [props.status, props.bookingCount]);

  return (
    <div className={`${classes.root} `}>
      <Link className={`${classes.link} ${status}`} to={`/${props.route}`}>
        <span className={`${classes.title}`}>{props.title}</span>
      </Link>
    </div>
  );
};
