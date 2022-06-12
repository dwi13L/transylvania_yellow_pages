import React, { useState, useEffect, Component } from "react";
import "./App.css";
import CardList from "./components/cardList/CardList.js";
import SearchBox from "./components/searchBox/SearchBox.js";

export default function App() {
  const [monsters, setMonsters] = useState([]);
  const [searchParam, setSearchParam] = useState("");
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  useEffect(() => {
    (async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users`
      );

      if (response.status !== 200) {
        //invoke handler
        return;
      }

      const users = await response.json();
      setMonsters(users);
    })();
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchParam)
    );
    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchParam]);

  const searchQueryHandler = (e) => {
    const searchParam = e.target.value.toLowerCase();
    setSearchParam(searchParam);
  };

  return (
    <div className="app">
      <h1 className="title">Transylvania Yellow Pages</h1>
      <SearchBox
        className="search"
        placeHolder={"Search Monsters"}
        onChangeHandler={searchQueryHandler}
      />
      <CardList items={filteredMonsters} itemName="Monster" />
    </div>
  );
}

/**
 * Class components ----------------------------------------------------------------------------------------
 * @deprecated ported component to functional component
 */

/**
 * Order of execution:
 * constructor > render > componentDidMount
 *
 */
export class _App extends Component {
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
         * Call back function to be run after asynchronous setState call
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
      <div className="app">
        <h1 className="title">Transylvania Yellow Pages</h1>
        <SearchBox
          className="search"
          placeHolder={"Search Monsters"}
          onChangeHandler={this.searchQueryHandler}
        />
        <CardList items={filteredMonsters} itemName="Monster" />
      </div>
    );
  }
}
