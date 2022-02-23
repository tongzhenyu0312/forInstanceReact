import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

const name = 'tongzhenyu';
const App = <div name={name} alias='tzy' className='my-div'>tongzhenyu</div>;

ReactDOM.render(App, document.getElementById('app'));
