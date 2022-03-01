'use strict';

var _react = _interopRequireDefault(require('react'));

var _TinyReact = _interopRequireDefault(require('./TinyReact'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var virtualDOM = _TinyReact['default'].createElement(
  'div',
  {
    className: 'container',
  },
  _TinyReact['default'].createElement('h1', null, '\u4F60\u597D Tiny React'),
  _TinyReact['default'].createElement(
    'h2',
    null,
    '(\u7F16\u7801\u5FC5\u6740\u6280)',
  ),
  _TinyReact['default'].createElement(
    'div',
    null,
    '\u5D4C\u59571 ',
    _TinyReact['default'].createElement('div', null, '\u5D4C\u5957 1.1'),
  ),
  _TinyReact['default'].createElement(
    'h3',
    null,
    '(\u89C2\u5BDF: \u8FD9\u4E2A\u5C06\u4F1A\u88AB\u6539\u53D8)',
  ),
  2 == 1 &&
    _TinyReact['default'].createElement(
      'div',
      null,
      '\u5982\u679C2\u548C1\u76F8\u7B49\u6E32\u67D3\u5F53\u524D\u5185\u5BB9',
    ),
  2 == 2 && _TinyReact['default'].createElement('div', null, '2'),
  _TinyReact['default'].createElement(
    'span',
    null,
    '\u8FD9\u662F\u4E00\u6BB5\u5185\u5BB9',
  ),
  _TinyReact['default'].createElement(
    'button',
    {
      onClick: function onClick() {
        return alert('你好');
      },
    },
    '\u70B9\u51FB\u6211',
  ),
  _TinyReact['default'].createElement(
    'h3',
    null,
    '\u8FD9\u4E2A\u5C06\u4F1A\u88AB\u5220\u9664',
  ),
  '2, 3',
);

console.log(virtualDOM);
