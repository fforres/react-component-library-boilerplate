import React, { Component, PropTypes } from 'react';
import style from './index.css';

class Suggesstion extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleClick(e) {
    console.log(e);
    console.log(this);
  }
  render() {
    if (!this.props.data) {
      return null;
    }
    return (
      <div className={style.suggestionArea}>
        {this.props.data.map((el, i) => (
          <li
            key={i}
            className={style.suggestion}
            onClick={this.handleClick}
          >
            {el.tagName}
          </li>
        ))}
      </div>
    );
  }
}

Suggesstion.propTypes = {
  data: PropTypes.array,
};

export default Suggesstion;
