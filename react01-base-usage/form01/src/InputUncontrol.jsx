import React, { Component } from 'react';

/**
 * 非受控组件 无需每次都同步数据（多余的setState和render）
 * 但是在需要时，必须通过 dom来获取数据
 */
export default class InputUncontrol extends Component {
  constructor() {
    super();
    this.state = { username: '' };
    this.inputRef = null;
  }
  inputChanger(e) {
    console.log('🚀 Logger:  - Input  - inputChanger  - value', e.target.value);
    this.setState({ username: e.target.value }); // 事件对象数据同步state数据，然后通过render同步给视图数据
  }
  clickHander() {
    console.log("🚀 Logger:  - InputUncontrol  - clickHander  - this.inputRef", this.inputRef.value);
  }
  render() {
    return (
      <div>
        <div>非受控组件</div>
        <input type="text" ref={(inputRef) => {this.inputRef = inputRef}}/>
        <button onClick={this.clickHander.bind(this)}>按钮</button>
      </div>
    );
  }
}
