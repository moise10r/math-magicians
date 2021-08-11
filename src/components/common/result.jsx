import React, { Component } from 'react';
import propTypes from 'prop-types';

class Result extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  render() {
    const { value, onChange } = this.props;
    return (
      <div className="row flex-center result">
        <input type="text" value={value} onChange={onChange} disabled />
      </div>
    );
  }
}

Result.propTypes = {
  value: propTypes.string.isRequired,
  onChange: propTypes.func.isRequired,
};

export default Result;
