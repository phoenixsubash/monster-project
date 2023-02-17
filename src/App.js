import { Component } from "react";
import { Cardlist } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/searchbox/search-box.component";
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

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { monsters, searchField } = this.state; //copying the properties while keeping main state constant
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.includes(searchField.toLowerCase())
    );
    return (
      <div>
        <h1>Monster Rlolodex</h1>
        <SearchBox
          placeholder={"Search Monsters"}
          handleChange={this.handleChange}
        />
        <Cardlist monsters={filteredMonsters}></Cardlist>
      </div>
    );
  }
}

export default App;
