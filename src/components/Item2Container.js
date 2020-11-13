import React, { useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Item2Nav from "./Item2Nav";
import Item2Sub1 from "./Item2Sub1";

const Account = (props) => {
  const [value, setValue] = useState(0);
  const navChangeHandler = (event, newValue) => {
    setValue(newValue);
  };
  const changeValue = (val) => {
    setValue(val);
  };
  return (
    <>
      <h3 style={{ color: "rgba(1,1,1,0.7)" }}>Item 2 Container</h3>
      <Item2Nav changeHandler={navChangeHandler} value={value} />
      <div>
        <Switch>
          <Route exact path="/item2" render={() => <Redirect to="/item2/sub1" />} />
          <Route
            exact
            path="/item2/sub1"
            render={() => <Item2Sub1 setSidebar={props.setSidebar} changeNav={changeValue} />}
          />
        </Switch>
      </div>
    </>
  );
};

export default Account;
