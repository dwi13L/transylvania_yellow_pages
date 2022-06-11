import React, { Component } from "react";
import "./App.css";
import { v4 } from "uuid";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      monsters: [
        { id: v4(), name: `Linda` },
        { id: v4(), name: `Frank` },
        { id: v4(), name: `Jacky` },
      ],
    };
  }

  /**
   * - Lists and Keys
    
    > A “key” is a special string attribute you need to include when creating lists of elements. Keys help React identify which items have changed, are added, or are removed.
    > 
    - Ideally, use id’s for keys and index as last resort as it may negatively affect performance and may cause issues with component state.
    - When keys are not assigned, react uses index as key
    - Keys must be assigned to top level item being returned from map function
    - Keys used within arrays should be unique among their siblings but doesn’t have to be unique globally
    - Reads
        [Index as a key is an anti-pattern](https://medium.com/@robinpokorny/index-as-a-key-is-an-anti-pattern-e0349aece318)
        [Reconciliation - React](https://reactjs.org/docs/reconciliation.html#recursing-on-children)
   */

  render() {
    return (
      <div className="App">
        {this.state.monsters.map((monster) => {
          return <h1 key={monster.id}>{monster.name}</h1>;
        })}
      </div>
    );
  }
}
