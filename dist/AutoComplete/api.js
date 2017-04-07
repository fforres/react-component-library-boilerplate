'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _skills = require('skills');

var _skills2 = _interopRequireDefault(_skills);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (queryString, searchId) {
  console.info('searching for ' + queryString);
  return new Promise(function (resolve) {
    var filtered = [];
    if (queryString) {
      filtered = _skills2.default.filter(function (el) {
        return el.tagName.lastIndexOf(queryString) !== -1;
      });
    }
    setTimeout(function () {
      resolve({
        data: filtered,
        searchId: searchId,
        queryString: queryString
      });
    }, 2000);
  });
};