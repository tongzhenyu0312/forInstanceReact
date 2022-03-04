'use strict';

var _react = _interopRequireDefault(require('react'));

var _TinyReact = _interopRequireDefault(require('./TinyReact'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var Heart = function Heart() {
  return _TinyReact['default'].createElement('div', null, '\u2665');
};

console.log('🚀 Logger:  - Heart', Heart);

_TinyReact['default'].render(
  _TinyReact['default'].createElement(Heart, null),
  document.getElementById('root'),
);
