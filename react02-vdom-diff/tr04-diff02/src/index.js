import React from 'react';
import TinyReact from './TinyReact';

class Alert extends TinyReact.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Default Title'
    };
  }

  onClick() {
    this.setState({
      title: 'setted Title'
    })
  }

  render() {
    return (
      <div>
        <div>{ this.state.title }</div>
        <button onClick={this.onClick.bind(this)}>按钮</button>
        { this.props.name }
        { this.props.age }
      </div>
    )
  }
}

// 生成虚拟dom
const AlertVDom = <Alert name='张三' age="20"></Alert>;

// 渲染
TinyReact.render(AlertVDom, document.getElementById('root'));


