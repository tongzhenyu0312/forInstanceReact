import React from 'react';
import ReactDOM from 'react-dom';

// 如果属性值为字符串类型，需要加引号，属性名称推荐采用驼峰式命名法。
// 如果属性值为JavaScript表达式，属性值外面加大(花)括号。

const name = 'tongzhenyu';
const App = <div name={name} alias='tzy'></div>;

ReactDOM.render(App, document.getElementById('app'));
