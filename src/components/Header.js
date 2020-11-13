import React, { useState } from "react";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Collapse from "@material-ui/core/Collapse";
import Notification from "./Notification";
import { styleHeader } from "./styles/header";

const Header = (props) => {
  const [notification, setNotification] = useState({
    count: "",
    unread: false,
    body: [
      { msg: "Notification 1", isHover: false },
      { msg: "Notification 2", isHover: false },
    ],
  });
  const [user, setUser] = useState({
    uid: 0,
    name: "John Doe",
    img:
      "https://st.depositphotos.com/2101611/3925/v/600/depositphotos_39258143-stock-illustration-businessman-avatar-profile-picture.jpg",
  });

  const [openUserProfile, setOpenUserProfile] = useState(false);

  const profileClickHandler = (e) => {
    if (!openUserProfile) {
      setOpenUserProfile(true);
    } else {
      setOpenUserProfile(false);
    }
  };

  function closeProfileBottom(e) {
    setOpenUserProfile(false);
  }

  function handleClickAwayProfile(e) {
    closeProfileBottom(e);
  }

  const logoutHandler = async () => {
    //logout handler
  };

  function notifHoverHandler(id, value) {
    let newData = { ...notification };
    newData.body.forEach((item) => {
      if (item._id == id) {
        item.isHover = value;
      }
    });

    setNotification(newData);
  }

  const classes = styleHeader();
  return (
    <>
      <div className={classes.header}>
        <div className={classes.logo}>Brand</div>
        <div className={classes.notificationBar}>
          <Notification notifHoverHandler={notifHoverHandler} notification={notification} />
        </div>
        <div className={classes.borderRight}></div>

        <ClickAwayListener onClickAway={handleClickAwayProfile}>
          <div
            style={{ cursor: "pointer" }}
            className={classes.userProfile}
            onClick={profileClickHandler}
          >
            <div className={classes.profileTop}>
              <div className={classes.imageContainer}>
                <img className={classes.userImage} src={user.img} />
              </div>
              <span> {user.name} </span>{" "}
              <span style={{ width: "50px" }}>
                <KeyboardArrowDownIcon
                  style={{
                    marginLeft: "100px",
                    cursor: "pointer",
                  }}
                />
              </span>
            </div>

            {}
            <div
              className={classes.profileBottom}
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              <Collapse
                style={{
                  position: "absolute",
                  top: "65px",
                  border: "1px solid rgba(1,1,1,0.1)",
                  width: "300px",
                  marginLeft: "-10px",
                  background: "white",
                  padding: "10px 10px",
                  borderTop: "none",
                }}
                timeout={0}
                in={openUserProfile}
                collapsedHeight={0}
              >
                <button
                  onClick={logoutHandler}
                  style={{
                    border: "none",
                    background: "#5094e7",
                    color: "white",
                    height: "30px",
                    padding: "0px 10px",
                    width: "120px",
                  }}
                >
                  LOGOUT
                </button>
              </Collapse>
            </div>
          </div>
        </ClickAwayListener>
      </div>
    </>
  );
};

export default Header;
