import React from "react";
import css from "./Filter.module.scss";
import { useDispatch } from "react-redux";
import { setFilter } from "../../redux/filterSlice.js";

const Filter = () => {
  const dispatch = useDispatch();

  const changeHandler = (e) => {
    const filterValue = e.target.value;
    dispatch(setFilter(filterValue));
  };

  return (
    <div className={css["container"]}>
      <span>Find contacts by name</span>
      <input
        type="text"
        name="filter"
        onChange={changeHandler}
        className={css["filter-input"]}></input>
    </div>
  );
};

export default Filter;
