import React, { Component } from 'react';
import context, {Consumer} from './context.js';

export default class Header extends Component {
  constructor() {
    super();
    this.state = {};
  }

  
  componentDidMount() {
    // 数据的消费方式二
    console.log("🚀 Logger:  - Header  - componentDidMount  - this.context", this.context);
  }
  

  render() {
    return (
      <div>
        <div>Header</div>
        {/* 数据的消费方式一 */}
        <Consumer>
          { value => (<div>{value}</div>) }
        </Consumer>
      </div>
    );
  }
}

Header.contextType = context;
