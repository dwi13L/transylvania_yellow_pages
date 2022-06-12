import React, { Component } from "react";
import "./SearchBox.css";

export default class SearchBox extends Component {
  render() {
    console.log(this.props);
    const { className, placeHolder, onChangeHandler } = this.props;

    return (
      <input
        className={`search-box ${className}`}
        type="search"
        placeholder={placeHolder}
        onChange={onChangeHandler}
      />
    );
  }
}
