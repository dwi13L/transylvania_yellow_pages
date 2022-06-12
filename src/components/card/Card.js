import React, { Component } from "react";
import "./Card.css";

export default function Card({ item }) {
  const { id, itemName, name, email, phone } = item;

  return (
    <div className="card">
      <img
        src={`https://robohash.org/${id}?set=set2`}
        alt={`${itemName} ${name}`}
      />
      <h2 key={id}>{name}</h2>
      <p>{phone}</p>
      <p>{email}</p>
    </div>
  );
}

/**
 * Class components ----------------------------------------------------------------------------------------
 * @deprecated ported component to functional component
 */
export class _Card extends Component {
  render() {
    const { id, itemName, name, email, phone } = this.props.item;
    return (
      <div className="card">
        <img
          src={`https://robohash.org/${id}?set=set2`}
          alt={`${itemName} ${name}`}
        />
        <h2 key={id}>{name}</h2>
        <p>{phone}</p>
        <p>{email}</p>
      </div>
    );
  }
}
