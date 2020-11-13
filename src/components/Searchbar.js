import React, { useState } from "react";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import RefreshIcon from "@material-ui/icons/Refresh";
import { styleSearchbar } from "./styles/searchbar";

export default (props) => {
  const classes = styleSearchbar();
  const [searchString, setSearchString] = useState(null);

  function changeHandler(e) {
    props.handleChangeSearchString(e.target.value);
    setSearchString(e.target.value);
  }

  function searchSubmitHandler(e) {
    e.preventDefault();
    props.handleSubmitSearch(searchString);
  }

  return (
    <div className={classes.root}>
      <div style={{ background: "red !important" }} className={classes.search}>
        <div className={classes.searchIcon}>
          <SearchIcon style={{ fill: "rgba(1,1,1,0.5)", zIndex: 2 }} />
        </div>
        <form onChange={changeHandler} onSubmit={searchSubmitHandler}>
          <InputBase
            placeholder="search…"
            value={props.searchString}
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            name="searchString"
            inputProps={{ "aria-label": "search" }}
          />
        </form>
      </div>
      {props.searchString.length === 0 ? (
        <div
          onClick={props.clearSearch}
          style={{
            cursor: "pointer",
            color: "rgba(1,1,1,0.5)",
            position: "relative",
            right: "25px",
            top: "6px",
            fontWeight: "bold",
            visibility: "hidden",
          }}
        >
          &#10005;
        </div>
      ) : (
        <div
          onClick={props.clearSearch}
          style={{
            cursor: "pointer",
            color: "rgba(1,1,1,0.5)",
            position: "relative",
            right: "25px",
            top: "6px",
            fontWeight: "bold",
            visibility: "visible",
          }}
        >
          &#10005;
        </div>
      )}

      <RefreshIcon
        style={{ cursor: "pointer" }}
        onClick={() => {
          props.refreshClickHandler();
        }}
        className={classes.refresh}
      />
    </div>
  );
};
