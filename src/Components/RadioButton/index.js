import React, { Component, PropTypes } from 'react';
import style from './index.css';

export class RadioButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
    };
    this.listItemClicked = this.listItemClicked.bind(this);
  }
  listItemClicked() {
    this.props.onClick(this.props._id);
  }
  render() {
    return (
      <li className={style.base} onClick={this.listItemClicked}>
        <span>
          <input
            type="radio"
            checked={this.props.isSelected}
            onClick={(e) => {
              e.preventDefault();
            }}></input>
        </span>
        <legend>{this.props.legend}</legend>
      </li>
    );
  }
}

RadioButton.propTypes = {
  _id: PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number,
  ]).isRequired,
  value: PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number,
  ]).isRequired,
  legend: PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number,
  ]).isRequired,
  isSelected: PropTypes.bool.isRequired,
  onClick: PropTypes.func,
};

export default RadioButton;
