import React from 'react';
import ReactDOM from 'react-dom';
import InputControl from './InputControl.jsx';
import InputUncontrol from './InputUncontrol.jsx';

class App extends React.Component {
  constructor(...args) {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <div>App:</div>
        <InputControl></InputControl> 
        <InputUncontrol></InputUncontrol>
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));
