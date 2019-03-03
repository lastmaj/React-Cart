import React, { Component } from "react";
import Navbar from "./components/navbar";
import Counters from "./components/counters";
import "./App.css";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 2 },
      { id: 4, value: 0 }
    ]
  };

  constructor() {
    super(); //constructor of parent
    //this lifecycle hook is used to init states
    //bases on props we receive from the outside
    //this.state = this.props.something;
    //props needs to be passed to constructor and super
  }

  componentDidMount() {
    //Ajax calls to get data from the server
  }

  render() {
    return (
      <React.Fragment>
        <Navbar
          counters={this.state.counters}
          totalCounters={this.state.counters.filter(c => c.value > 0).length}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
          />
        </main>
      </React.Fragment>
    );
  }

  handleDelete = id => {
    const counters = this.state.counters.filter(c => c.id !== id);
    this.setState({ counters }); // equivalent to setState({counters : counters})
  };

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  handleIncrement = counter => {
    //spread operator; clones the array
    //the objects in the clone are the same in the real one
    //if we modify the clone items, it directly modifies the one in the original 2
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index].value++;
    console.log(counters);
    console.log(index);
    this.setState({ counters });
  };
}

export default App;
