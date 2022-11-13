import React from "react";
import InputRange from "react-input-range";

import "react-input-range/lib/css/index.css";
import "./priceRange.css";

export default class Range extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: { min: 1000, max: 5000 },
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange(value) {
    this.setState({ value });
  }

  render() {
    return (
      <div id="main-P-rang">
        <RangeInput
          className="Prang"
          value={this.state.value}
          onChange={this.onChange}
        />
      </div>
    );
  }
}

const RangeInput = ({ value, onChange }) => (
  <InputRange
    step={1}
    formatLabel={(value) => `$${value}`}
    maxValue={10000}
    minValue={0}
    value={value}
    onChange={onChange}
  />
);
