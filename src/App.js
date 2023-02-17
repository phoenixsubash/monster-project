import { Component } from "react";
import { Cardlist } from "./components/card-list/card-list.component";
import "./App.css";

class App extends Component {
  constructor() {
    // It runs every time the function being called

    super(); // this method help us to use this.state

    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    //Everytime component loads it automatically calls the api for the data
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }
  render() {
    const { monsters, searchField } = this.state; //copying the properties while keeping main state constant
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.includes(searchField.toLowerCase())
    );
    return (
      <div>
        <input
          type="search"
          placeholder="search monsters"
          onChange={(e) => this.setState({ searchField: e.target.value })}
        ></input>
        <Cardlist monsters={filteredMonsters}></Cardlist>
      </div>
    );
  }
}

export default App;
