import React, { Component } from "react";
import "./Card.css";

export default class Card extends Component {
  render() {
    const { id, itemName, name, email } = this.props;
    return (
      <div className="card">
        <img
          src={`https://robohash.org/${id}?set=set2`}
          alt={`${itemName} ${name}`}
        />
        <h2 key={id}>{name}</h2>
        <p>{email}</p>
      </div>
    );
  }
}
