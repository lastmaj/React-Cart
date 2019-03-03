import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    const { onReset, counters, onDelete, onIncrement } = this.props;
    return (
      <div>
        <button
          onClick={this.props.onReset}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>
        {counters.map(counter => (
          <Counter
            key={counter.id} //used internally by React
            onDelete={onDelete}
            onIncrement={onIncrement}
            counter={counter}
          >
            <p>Counter n: {counter.id} </p>
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
