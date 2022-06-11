import React, { Component } from "react";

export default class SearchBox extends Component {
  render() {
    console.log(this.props);
    const { className, placeHolder, onChangeHandler } = this.props;

    return (
      <div className={className}>
        <input
          type="search"
          placeholder={placeHolder}
          onChange={onChangeHandler}
        />
      </div>
    );
  }
}
