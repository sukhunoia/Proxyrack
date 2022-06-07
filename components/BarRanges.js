import React from "react";
import { render } from "react-dom";

class BarRanges extends React.Component {
  values = [100, 200, 500, 1000, 2000, 5000];

  constructor(props) {
    super(props);
    this.state = {
      currentStepIndex: 0
    };
  }

  handleInputChange = e => {
    this.setState({ currentStepIndex: e.currentTarget.value });
  };

  render() {
    return (
      <div>
        <input
          onInput={this.handleInputChange}
          type="range"
          min="0"
          value={this.state.currentStepIndex}
          max="6"
          step="1"
          list="tick-list"
        />
        <span id="output">{this.values[this.state.currentStepIndex]}</span>
      </div>
    );
  }
}

export default BarRanges;