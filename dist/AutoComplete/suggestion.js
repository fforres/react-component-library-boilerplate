'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

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

var Suggesstion = function (_Component) {
  _inherits(Suggesstion, _Component);

  function Suggesstion(props) {
    _classCallCheck(this, Suggesstion);

    var _this = _possibleConstructorReturn(this, (Suggesstion.__proto__ || Object.getPrototypeOf(Suggesstion)).call(this, props));

    _this.state = {};
    return _this;
  }

  _createClass(Suggesstion, [{
    key: 'handleClick',
    value: function handleClick(e) {
      console.log(e);
      console.log(this);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      if (!this.props.data) {
        return null;
      }
      return _react2.default.createElement(
        'div',
        { className: style.suggestionArea },
        this.props.data.map(function (el, i) {
          return _react2.default.createElement(
            'li',
            {
              key: i,
              className: style.suggestion,
              onClick: _this2.handleClick
            },
            el.tagName
          );
        })
      );
    }
  }]);

  return Suggesstion;
}(_react.Component);

Suggesstion.propTypes = {
  data: _react.PropTypes.array
};

exports.default = Suggesstion;