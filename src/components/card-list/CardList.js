import React, { Component } from "react";

export default class CardList extends Component {
  render() {
    const { items } = this.props;
    return (
      <div className="card-list">
        {items.map((item) => {
          return <h1 key={item.id}>{item.name}</h1>;
        })}
      </div>
    );
  }
}
