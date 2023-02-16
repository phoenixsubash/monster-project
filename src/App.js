import { Component } from "react";
import { Cardlist } from "./components/card-list/card-list.component";
import "./App.css";

class App extends Component {
  constructor() {
    // It runs every time the function being called

    super(); // this method help us to use this.state

    this.state = {
      monsters: [],
    };
  }

  componentDidMount() {
    //Everytime component loads it automatically calls the api for the data
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }
  render() {
    return (
      <div>
        <Cardlist monsters={this.state.monsters}></Cardlist>
      </div>
    );
  }
}

export default App;
