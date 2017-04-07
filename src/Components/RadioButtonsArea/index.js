import React, { Component, PropTypes } from 'react';
import RadioButton from '../RadioButton';

import style from './index.css';

export class RadioButtonsArea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data || [],
      selectedKey: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(id) {
    this.setState({
      selectedKey: id,
    });
  }

  render() {
    return (
      <div className={style.base}>
        {this.state.data.map((el, i) => (
          <RadioButton
            key={i}
            _id={i}
            isSelected={(this.state.selectedKey === i)}
            legend={el.key}
            value={el.value}
            onClick={this.handleClick}
          />
        ))}
      </div>
    );
  }
}

RadioButtonsArea.propTypes = {
  data: PropTypes.array,
};

export default RadioButtonsArea;
