import React from 'react';
import ReactDOM from 'react-dom';

let clickHandler = (...args) => {console.log(args)};

const App = <button onClick={(e) => {clickHandler(e, 'anything')}}>按钮</button>

ReactDOM.render(App, document.getElementById('app'));
