import React, { Component, PropTypes } from 'react';
import style from './index.css';
import Api from './api';
import Suggestion from './suggestion';

export class AutoComplete extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSearchId: '',
      resultsData: [],
    };
    this.inputChanged = this.inputChanged.bind(this);
    this.makeApiCall = this.makeApiCall.bind(this);
    this.setResults = this.setResults.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleClick(id) {
    this.setState({
      selectedKey: id,
    });
  }

  changeQueryString(queryString) {
    return new Promise((resolve) => {
      if (this.state.queryString !== queryString) {
        this.setState({
          queryString,
        }, () => {
          resolve(this.state.queryString);
        });
      }
    });
  }

  makeApiCall() {
    return new Promise((resolve) => {
      this.setState({
        loading: true,
      }, () => {
        resolve(Api(this.state.queryString));
      });
    });
  }

  setResults(apiResponse) {
    return new Promise((resolve, reject) => {
      if (apiResponse.queryString === this.state.queryString) {
        console.log(this, apiResponse, apiResponse.queryString, this.state.queryString);
        resolve(apiResponse.data);
      } else {
        reject('');
      }
    });
  }

  handleKeyPress(e) {
    switch (e.keyCode) {
      case 27:
        // Handle Escape
        this.closeSuggestions();
        break;
      default:
        this.handleSearch(e.target.value);
        break;
    }
  }

  handleSearch(value) {
    this
      .changeQueryString(value)
      .then(this.makeApiCall)
      .then(this.setResults)
      .then((data) => {
        this.setState({
          resultsData: data,
          loading: false,
        });
      });
  }

  inputChanged(e) {
    this.handleKeyPress(e);
  }

  showLoading() {
    if (this.state.loading) {
      return (<span>...loading</span>);
    }
    return null;
  }

  render() {
    return (
      <div className={style.base}>
        <div className={style.inputArea}>
          <input
            type="text"
            className={style.input}
            onKeyUp={this.inputChanged}
          ></input>
          {this.showLoading()}
        </div>
        <Suggestion data={this.state.resultsData}/>
      </div>
    );
  }
}

AutoComplete.propTypes = {
  onSelect: PropTypes.func,
};

export default AutoComplete;
