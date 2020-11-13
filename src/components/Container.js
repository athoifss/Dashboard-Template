import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import axios from "axios";
import App from "./App";
import Login from "./Login";
import Preloader from "./Preloader";

export default () => {
  const [isLoading, setIsLoading] = useState(false);

  // Axios Response interceptor
  axios.interceptors.response.use(
    function (response) {
      return response;
    },
    async function (error) {
      console.log("error in " + error.config.url);
      // Handle Error accordingly
    }
  );

  //Function to check whether user is logged in
  // Change return value for logged in and logged out state
  let isLoggedIn = () => {
    // if ("authToken" in localStorage) {
    //   return true;
    // } else {
    //   return false;
    // }

    return true;
    // return false;
  };

  return (
    <div className="root">
      {isLoading ? (
        <Preloader />
      ) : (
        <>
          <Router>
            <Switch>
              <Route
                exact
                path="/login"
                render={() => (isLoggedIn() ? <Redirect to="/" /> : <Login />)}
              />
              <Route path="/" render={() => (isLoggedIn() ? <App /> : <Redirect to="/login" />)} />
            </Switch>
          </Router>
        </>
      )}
    </div>
  );
};
