'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RadioButtonsArea = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _RadioButton = require('../RadioButton');

var _RadioButton2 = _interopRequireDefault(_RadioButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var style = {};

var RadioButtonsArea = exports.RadioButtonsArea = function (_Component) {
  _inherits(RadioButtonsArea, _Component);

  function RadioButtonsArea(props) {
    _classCallCheck(this, RadioButtonsArea);

    var _this = _possibleConstructorReturn(this, (RadioButtonsArea.__proto__ || Object.getPrototypeOf(RadioButtonsArea)).call(this, props));

    _this.state = {
      data: props.data || [],
      selectedKey: null
    };
    _this.handleClick = _this.handleClick.bind(_this);
    return _this;
  }

  _createClass(RadioButtonsArea, [{
    key: 'handleClick',
    value: function handleClick(id) {
      this.setState({
        selectedKey: id
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        { className: style.base },
        this.state.data.map(function (el, i) {
          return _react2.default.createElement(_RadioButton2.default, {
            key: i,
            _id: i,
            isSelected: _this2.state.selectedKey === i,
            legend: el.key,
            value: el.value,
            onClick: _this2.handleClick
          });
        })
      );
    }
  }]);

  return RadioButtonsArea;
}(_react.Component);

RadioButtonsArea.propTypes = {
  data: _react.PropTypes.array
};

exports.default = RadioButtonsArea;