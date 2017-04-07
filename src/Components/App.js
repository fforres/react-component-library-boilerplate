import React, { Component } from 'react';

import RadioButtonsArea from './RadioButtonsArea';
import AutoComplete from './AutoComplete';
import style from './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      radioButtonsData: [{
        key: 'Hola',
        value: 'Mundo',
      }, {
        key: 'Wad',
        value: 'duuup',
      }, {
        key: 'Foo',
        value: 'Bar',
      }, {
        key: 'Fizz',
        value: 'Buzz',
      }],
    };
  }
  render() {
    return (
      <div className={style.base}>
        <RadioButtonsArea data={this.state.radioButtonsData} />
        <AutoComplete />
      </div>
    );
  }
}

export default App;
