import { Component } from 'react';
import propTypes from 'prop-types';

class Row extends Component {
  constructor(props) {
    super(props);
    this.state = { };
    this.rows = [
      ['AC', '+/-', '%', '÷'],
      ['7', '8', '9', 'x'],
      ['4', '5', '6', '-'],
      ['1', '2', '3', '+'],
      ['0', '.', '='],
    ];
  }

  render() {
    const { onClick } = this.props;
    return (
      <>
        {this.rows.map((row) => (
          <div key={row} className="row flex-center ">
            {
            row.map((key) => <button onClick={() => onClick(key)} key={key} className="btn" type="button">{key}</button>)
          }
          </div>

        ))}
      </>
    );
  }
}
Row.propTypes = {
  onClick: propTypes.func.isRequired,
};

export default Row;
