import React from "react";
import { styleNotification } from "./styles/notification";
import NotificationsIcon from "@material-ui/icons/Notifications";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";

const Notification = (props) => {
  const classes = styleNotification();
  const [isOpen, setIsOpen] = React.useState(false);

  function handleIconClick() {
    setIsOpen((prev) => !prev);
  }

  function handleClickAway() {
    setIsOpen(false);
  }

  function notifItemHover(id, val) {
    props.notifHoverHandler(id, val);
  }

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <div>
        <div className={classes.notifIconContainer}>
          {props.notification.unread ? (
            <div className={classes.notifCount}>{props.notification.count}</div>
          ) : null}

          <NotificationsIcon
            style={{ cursor: "pointer", fill: "black" }}
            onClick={handleIconClick}
          />
        </div>
        {isOpen ? (
          <div className={classes.notificationContainer}>
            <h3 className={classes.notificationTitle}>Notifications</h3>
            <ul>
              {props.notification.body.map((item) => {
                return (
                  <li
                    onMouseEnter={notifItemHover.bind(this, item._id, true)}
                    onMouseEnter={notifItemHover.bind(this, item._id, false)}
                  >
                    {item.msg}
                  </li>
                );
              })}
            </ul>
          </div>
        ) : null}
      </div>
    </ClickAwayListener>
  );
};

export default Notification;
