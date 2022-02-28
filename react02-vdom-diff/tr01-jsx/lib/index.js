'use strict';

// JSX是一种浏览器无法直接识别的语法，通过@babel/preset-env里的插件，可以将其转换为React.createElement()的JS语法
var Demo = /*#__PURE__*/ React.createElement(
  'div',
  {
    className: 'container',
  },
  /*#__PURE__*/ React.createElement('h3', null, 'Hello React'),
  /*#__PURE__*/ React.createElement('p', null, 'React is great '),
);
