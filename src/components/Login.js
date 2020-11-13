import React, { useState } from "react";
import Preloader from "./Preloader";
import { styleLogin } from "./styles/login";

function Login() {
  const classes = styleLogin();

  const [formData, changeFormData] = useState({
    username: "",
    password: "",
  });

  const [errorClass, setErrorClass] = useState(classes.hide);
  const [loading, setLoading] = useState(false);

  function showError() {
    setErrorClass(classes.show);
  }
  function hideError() {
    setErrorClass(classes.hide);
  }
  function handleChange(event) {
    let name = event.target.name;
    let value = event.target.value;
    let newFormData = { ...formData };
    newFormData[name] = value;
    changeFormData(newFormData);
  }

  function handleSubmit(event) {
    event.preventDefault();
    hideError();
    // Login API call and error handle
    // set authToken in localStorage to maintain logged in state
    // Change return value of isLoggedIn function in Container.js to simulate logged in and logged out state
  }

  return (
    <div className={classes.root}>
      {loading ? (
        <div style={{ height: "90vh", display: "flex", alignItems: "center" }}>
          <Preloader />
        </div>
      ) : (
        <>
          <div className={classes.logo}>Brand Name</div>
          <form onChange={handleChange} onSubmit={handleSubmit}>
            <div className={classes.signText}>Please Sign In</div>
            <input autoFocus required placeholder="username" name="username" />
            <input requiredtype="password" name="password" placeholder="password" />
            <input type="submit" value="Login" />
            <div className={`${classes.error} ${errorClass}`}>Error Message</div>
          </form>
        </>
      )}
    </div>
  );
}

export default Login;
