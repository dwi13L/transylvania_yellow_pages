import React, { Component } from "react";
import "./SearchBox.css";

export default function SearchBox(props) {
  const { className, placeHolder, onChangeHandler } = props;

  return (
    <input
      className={`search-box ${className}`}
      type="search"
      placeholder={placeHolder}
      onChange={onChangeHandler}
    />
  );
}

/**
 * Class components ----------------------------------------------------------------------------------------
 * @deprecated ported component to functional component
 */
export class _SearchBox extends Component {
  render() {
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
