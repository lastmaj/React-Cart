import React, { Component } from "react";
import Persons from "../components/Persons/Persons";

class App extends Component {
  state = {
    persons: [
      { id: "ze84a", name: "Hrouz", corp: "Hrouz Airlines" },
      { id: "aeea97", name: "Papapu", corp: "Enahou Ghabar" },
      { id: "ezaea8", name: "Pouchti", corp: "Evil Unltd" }
    ]
  };

  nameChangeHandler = (e, id) => {
    const index = this.state.persons.findIndex(p => p.id === id);
    const person = { ...this.state.persons[index] };
    person.name = e.target.value;
    const persons = [...this.state.persons];
    persons[index] = person;
    this.setState({ persons });
  };

  deleteHandler = id => {
    const index = this.state.persons.findIndex(p => p.id === id);
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({ persons });
  };

  render() {
    return (
      <div>
        <Persons
          persons={this.state.persons}
          delete={this.deleteHandler}
          change={this.nameChangeHandler}
        />
      </div>
    );
  }
}

export default App;
