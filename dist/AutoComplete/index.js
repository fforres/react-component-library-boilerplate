'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AutoComplete = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _api = require('./api');

var _api2 = _interopRequireDefault(_api);

var _suggestion = require('./suggestion');

var _suggestion2 = _interopRequireDefault(_suggestion);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var style = {
  'base': 'index__base___1A2Sr',
  'input': 'index__input___3s_bB',
  'inputArea': 'index__inputArea___1UMsV',
  'suggestion': 'index__suggestion___1cJL2'
};

var AutoComplete = exports.AutoComplete = function (_Component) {
  _inherits(AutoComplete, _Component);

  function AutoComplete(props) {
    _classCallCheck(this, AutoComplete);

    var _this = _possibleConstructorReturn(this, (AutoComplete.__proto__ || Object.getPrototypeOf(AutoComplete)).call(this, props));

    _this.state = {
      currentSearchId: '',
      resultsData: []
    };
    _this.inputChanged = _this.inputChanged.bind(_this);
    _this.makeApiCall = _this.makeApiCall.bind(_this);
    _this.setResults = _this.setResults.bind(_this);
    _this.handleKeyPress = _this.handleKeyPress.bind(_this);
    return _this;
  }

  _createClass(AutoComplete, [{
    key: 'handleClick',
    value: function handleClick(id) {
      this.setState({
        selectedKey: id
      });
    }
  }, {
    key: 'changeQueryString',
    value: function changeQueryString(queryString) {
      var _this2 = this;

      return new Promise(function (resolve) {
        if (_this2.state.queryString !== queryString) {
          _this2.setState({
            queryString: queryString
          }, function () {
            resolve(_this2.state.queryString);
          });
        }
      });
    }
  }, {
    key: 'makeApiCall',
    value: function makeApiCall() {
      var _this3 = this;

      return new Promise(function (resolve) {
        _this3.setState({
          loading: true
        }, function () {
          resolve((0, _api2.default)(_this3.state.queryString));
        });
      });
    }
  }, {
    key: 'setResults',
    value: function setResults(apiResponse) {
      var _this4 = this;

      return new Promise(function (resolve, reject) {
        if (apiResponse.queryString === _this4.state.queryString) {
          console.log(_this4, apiResponse, apiResponse.queryString, _this4.state.queryString);
          resolve(apiResponse.data);
        } else {
          reject('');
        }
      });
    }
  }, {
    key: 'handleKeyPress',
    value: function handleKeyPress(e) {
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
  }, {
    key: 'handleSearch',
    value: function handleSearch(value) {
      var _this5 = this;

      this.changeQueryString(value).then(this.makeApiCall).then(this.setResults).then(function (data) {
        _this5.setState({
          resultsData: data,
          loading: false
        });
      });
    }
  }, {
    key: 'inputChanged',
    value: function inputChanged(e) {
      this.handleKeyPress(e);
    }
  }, {
    key: 'showLoading',
    value: function showLoading() {
      if (this.state.loading) {
        return _react2.default.createElement(
          'span',
          null,
          '...loading'
        );
      }
      return null;
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: style.base },
        _react2.default.createElement(
          'div',
          { className: style.inputArea },
          _react2.default.createElement('input', {
            type: 'text',
            className: style.input,
            onKeyUp: this.inputChanged
          }),
          this.showLoading()
        ),
        _react2.default.createElement(_suggestion2.default, { data: this.state.resultsData })
      );
    }
  }]);

  return AutoComplete;
}(_react.Component);

AutoComplete.propTypes = {
  onSelect: _react.PropTypes.func
};

exports.default = AutoComplete;