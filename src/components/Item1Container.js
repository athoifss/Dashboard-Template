import React, { useState } from "react";
import { Route, Redirect } from "react-router-dom";

import Item1Nav from "./Item1Nav";
import Item1Sub1 from "./Item1Sub1";
import Item1Sub2 from "./Item1Sub2";
import Searchbar from "./Searchbar";

import { styleApp } from "./styles/app";

export default (props) => {
  const classes = styleApp();
  const [value, setValue] = useState(0);
  const [pageCountItem2, setPageCountItem2] = useState(4);
  const [currPageItem2, setCurrPageItem2] = useState(1);
  const [state, setState] = useState({
    item1: [
      {
        name: "Cristiano Ronaldo",
        image: "https://i.pinimg.com/originals/17/56/8f/17568fcd478e0699067ca7b9a34c702f.png",
        info1: "Lorem",
        info2: "Real Madrid",
        info3: "460",
      },
      {
        name: "Lionel Messi",
        image: "https://i.pinimg.com/originals/17/56/8f/17568fcd478e0699067ca7b9a34c702f.png",
        info1: "Lorem",
        info2: "Barcelona",
        info3: "450",
      },
      {
        name: "Cristiano Ronaldo",
        image: "https://i.pinimg.com/originals/17/56/8f/17568fcd478e0699067ca7b9a34c702f.png",
        info1: "Lorem",
        info2: "Real Madrid",
        info3: "460",
      },
      {
        name: "Lionel Messi",
        image: "https://i.pinimg.com/originals/17/56/8f/17568fcd478e0699067ca7b9a34c702f.png",
        info1: "Lorem",
        info2: "Barcelona",
        info3: "450",
      },
    ],
    item2: [
      {
        name: "Neymar Jr",
        image: "https://i.pinimg.com/originals/17/56/8f/17568fcd478e0699067ca7b9a34c702f.png",
        info1: "Lorem",
        info2: "PSG",
        info3: "460",
        info4: "Lorem Ipsum Doloret",
      },
      {
        name: "Kylian Mbappe",
        image: "https://i.pinimg.com/originals/17/56/8f/17568fcd478e0699067ca7b9a34c702f.png",
        info1: "Lorem",
        info2: "PSG",
        info3: "450",
        info4: "Lorem Ipsum Doloret",
      },
    ],
    item3: [],
    item4: [],
  });

  const [searchString, setSearchString] = useState("");

  function pageClickItem2(page) {
    setCurrPageItem2(page);
  }
  function handleChangeSearchString(searchString) {
    searchString = searchString.toLowerCase();
    setSearchString(searchString);
  }

  function handleSubmitSearch(searchString) {
    console.log("Search submit handler");
  }

  function clearSearch() {
    setSearchString("");
    handleSubmitSearch("");
  }

  function refresh() {
    console.log("Refresh handler");
  }
  const navChangeHandler = (event, newValue) => {
    setValue(newValue);
  };
  const changeValue = (val) => {
    setValue(val);
  };

  return (
    <div>
      <h3 style={{ color: "rgba(1,1,1,0.7)" }}>Item 1 Container</h3>
      <Item1Nav changeHandler={navChangeHandler} value={value} />
      <Searchbar
        handleChangeSearchString={handleChangeSearchString}
        handleSubmitSearch={handleSubmitSearch}
        refreshClickHandler={refresh}
        value={value}
        searchString={searchString}
        clearSearch={clearSearch}
      />
      <div className={classes.router}>
        <Route exact path="/item1" render={() => <Redirect to="/item1/sub1" />} />
        <Route
          exact
          path="/item1/sub1"
          render={() => (
            <Item1Sub1 setSidebar={props.setSidebar} changeNav={changeValue} state={state} />
          )}
        />
        <Route
          exact
          path="/item1/sub2"
          render={() => (
            <Item1Sub2
              pageCount={pageCountItem2}
              handlePageClick={pageClickItem2}
              currPage={currPageItem2}
              setSidebar={props.setSidebar}
              changeNav={changeValue}
              state={state}
            />
          )}
        />
      </div>
    </div>
  );
};
