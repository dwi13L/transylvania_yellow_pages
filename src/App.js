import React, { Component } from "react";
import "./App.css";

/**
 * Order of execution:
 * constructor > render > componentDidMount
 *
 */
export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      monsters: [],
      searchParam: "",
    };
  }

  // Ideal place to initiate fetching data that is crucial for the component to render
  async componentDidMount() {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users`);

    if (response.status !== 200) {
      //invoke handler
      return;
    }

    const users = await response.json();

    this.setState(
      () => {
        return { monsters: users };
      },
      () => {
        console.log(`monster list set`);
      }
    );
  }

  searchQueryHandler = (e) => {
    const searchParam = e.target.value.toLowerCase();
    this.setState(() => {
      return { searchParam };
    });
  };

  render() {
    const { monsters, searchParam } = this.state;

    const filteredMonsters =
      searchParam !== ""
        ? monsters.filter((monster) =>
            monster.name.toLowerCase().includes(searchParam)
          )
        : monsters;

    return (
      <div className="App">
        <div className="search">
          <input
            type="search"
            placeholder="search monsters"
            onChange={this.searchQueryHandler}
          />
        </div>
        <div className="App">
          {filteredMonsters.map((monster) => {
            return <h1 key={monster.id}>{monster.name}</h1>;
          })}
        </div>
      </div>
    );
  }
}
