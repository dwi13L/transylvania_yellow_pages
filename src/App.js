import React, { Component } from "react";
import "./App.css";
import CardList from "./components/card-list/CardList.js";
import SearchBox from "./components/search-box/SearchBox.js";

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
  /**
   * IMPORTANT NOTE: if componentDidMount returns a promise, it will not be awaited!
   *
   */
  async componentDidMount() {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users`);

    if (response.status !== 200) {
      //invoke handler
      return;
    }

    const users = await response.json();

    this.setState(
      //Updater function
      () => {
        return { monsters: users };
      },
      //Callback function
      () => {
        /**
         * Call back function
         */
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
        <SearchBox
          className="search"
          placeHolder={"Search Monsters"}
          changeHandler={this.searchQueryHandler}
        />
        <CardList items={filteredMonsters} />
      </div>
    );
  }
}
