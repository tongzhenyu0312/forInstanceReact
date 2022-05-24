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

TinyReact.render(<Alert name='张三' age={ 20 } />, document.getElementById('root'));

class Header extends TinyReact.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div>Header</div>
  }
}

setTimeout(() => {
  // 渲染原组件，但组件的props发生了变化
  TinyReact.render(<Alert name='李四' age={ 50 } />, document.getElementById('root'));
  // 渲染新组件
  // TinyReact.render(<Header></Header>, document.getElementById('root'));
}, 1000)


