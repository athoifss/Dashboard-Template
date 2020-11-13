import React, { useState, useEffect } from "react";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Switch from "react-switch";
import Preloader from "./Preloader";
import "react-dropdown/style.css";
import { styleItem2Sub1 as style } from "./styles/item2Sub1";

export default (props) => {
  const classes = style();
  const [state, setState] = useState({
    value1: "Value 1",
    value2: "Value 2",
    value3: "Value 3",
    value4: "Value 4",
    value5: "Value 5",
    value6: "Value 6",
    value7: "Value 7",
    value8: "Value 8",
    value9: "Value 9",
    value10: "Value 10",
  });

  const [openModal, setOpenModalManagerImage] = useState(false);

  const [toggle, setToggle] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleOpenModal = () => {
    setOpenModalManagerImage(true);
  };

  const handleCloseModal = () => {
    setOpenModalManagerImage(false);
  };

  const handleChangeToggle = (event) => {
    let newToggle = !toggle;
    setToggle(newToggle);
  };

  function join(var1, var2) {
    return `${var1} ${var2}`;
  }

  useEffect(() => {
    props.changeNav(0);
    props.setSidebar("listing");
  }, []);

  return (
    <div className={classes.root}>
      {loading ? (
        <Preloader />
      ) : (
        <>
          <div className={classes.toggleSwitch}>
            <label className={classes.switchLabel} htmlFor="material-switch">
              <span className={classes.switchSpan} style={{ color: "#333333" }}>
                Switch Toggle
              </span>
              <Switch
                checked={toggle}
                onChange={handleChangeToggle}
                onColor="#c5dffc"
                onHandleColor="#5094e7"
                handleDiameter={22}
                uncheckedIcon={false}
                checkedIcon={false}
                boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                activeBoxShadow="0px 0px 1px 5px rgba(0, 0, 0, 0.2)"
                height={15}
                width={35}
                className="react-switch"
                id="material-switch"
              />
            </label>
          </div>
          <div className={`${classes.workplaceDetails} ${classes.sec}`}>
            <div className={classes.col}>
              <div>
                <div className={join(classes.field)}>Field 1</div>
                <div style={{ width: "350px" }} className={join(classes.value)}>
                  {state.value1}
                </div>
              </div>
              <div>
                <div className={join(classes.field)}>Field 2</div>
                <div className={join(classes.value)}>{state.value2}</div>
              </div>
            </div>
            <div className={classes.col}>
              <div>
                <div className={join(classes.field)}>Field 3</div>
                <div className={join(classes.value)} style={{ width: "350px" }}>
                  {state.value3}
                </div>
              </div>
              <div>
                <div className={join(classes.field)}>Field 4</div>
                <div className={join(classes.valueShort)}>{state.value4}</div>
              </div>
              <div>
                <div className={join(classes.field)}>Field 5</div>
                <div className={join(classes.valueShort)}>{state.value5}</div>
              </div>
            </div>
          </div>
          <div className={`${classes.managerDetails} ${classes.sec}`}>
            <div className={classes.col}>
              <div>
                <div className={join(classes.field)}>Field 6</div>
                <div className={join(classes.value)}>{state.value6}</div>
              </div>
              <div>
                <div className={join(classes.field)}>Field 7</div>
                <div className={join(classes.value)}>{state.value7}</div>
              </div>
              <div>
                <div className={join(classes.field)}>Field 8</div>
                <div className={join(classes.value)}>
                  <div
                    onClick={handleOpenModal}
                    style={{
                      paddingLeft: "10px",
                      fontSize: "0.9em",
                      color: "#5094e7",
                      cursor: "pointer",
                    }}
                  >
                    view detail
                  </div>
                </div>
              </div>
            </div>
            <div className={classes.col}>
              <div>
                <div className={join(classes.field)}>Field 9</div>
                <div className={join(classes.value)}>{state.value9}</div>
              </div>
              <div>
                <div className={join(classes.field)}>Field 10</div>
                <div className={join(classes.value)}>{state.value10}</div>
              </div>
            </div>
          </div>
        </>
      )}

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={openModal}
        onClose={handleCloseModal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 400,
        }}
        disableBackdropClick={false}
      >
        <Fade in={openModal}>
          <div className={classes.paper}>
            <div id="transition-modal-description">
              <div className={classes.top}>
                <div onClick={handleCloseModal} className={classes.close}>
                  &times;
                </div>
              </div>
              <div className={classes.modalContent}>
                <img alt="" src={"https://www.w3schools.com/w3css/img_forest.jpg"} />
              </div>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};
