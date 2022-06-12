import React, { Component } from "react";
import Card from "../card/Card.js";
import "./CardList.css";

export default class CardList extends Component {
  render() {
    const { items, itemName } = this.props;

    return (
      <div className="card-list-container">
        {items.map((item) => {
          return <Card key={item.id} item={item} itemName={itemName} />;
        })}
      </div>
    );
  }
}
