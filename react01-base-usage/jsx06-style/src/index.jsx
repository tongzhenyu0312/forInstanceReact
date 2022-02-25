import React from 'react';
import ReactDOM from 'react-dom';

// 全局样式
import './index.css';
// 局部样式
import styles from './index.module.css'

// 行内样式(以px为单位的值，可以直接写数字)
const style = { fontSize: 18 };

const App = <div className={`my-div-g ${styles['my-div-module']}`} style={style}>tongzhenyu</div>;

ReactDOM.render(App, document.getElementById('app'));

