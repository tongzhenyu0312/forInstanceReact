import React, { Component } from 'react';

export default class InputControl extends Component {
  constructor() {
    super();
    this.state = { username: '' };
  }
  inputChanger(e) {
    // 数据有三个存储地：事件对象、state、视图
    // 受控组件，就是保持这三者的数据同步
    console.log('🚀 Logger:  - Input  - inputChanger  - value', e.target);
    this.setState({ username: e.target.value }); // 事件对象数据同步state数据，然后通过render同步给视图数据
  }
  render() {
    return (
      <div>
        <div>受控组件</div>
        {/* 视图数据没有同步 */}
        <input type='text' onChange={this.inputChanger.bind(this)} value={99}/>
        {/* state中的数据没有同步 */}
        {/* <input type='text'/> */}
        {/* <input type='text' onChange={this.inputChanger.bind(this)} value={this.state.username}/> */}
      </div>
    );
  }
}
