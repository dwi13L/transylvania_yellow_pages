import React, { Component } from "react";
import Card from "../card/Card.js";
import "./CardList.css";

export default function CardList({ items, itemName }) {
  return (
    <div className="card-list-container">
      {items.map((item) => {
        return <Card key={item.id} item={item} itemName={itemName} />;
      })}
    </div>
  );
}

/**
 * Class components ----------------------------------------------------------------------------------------
 * @deprecated ported component to functional component
 */
export class _CardList extends Component {
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
