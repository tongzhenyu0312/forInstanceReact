import React from 'react';
import TinyReact from './TinyReact';

const Component = TinyReact.Component;

class Alert extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Default Title',
    };
  }

  onClick() {
    this.setState({
      title: 'setted Title',
    });
  }

  render() {
    return (
      <div>
        <div>{this.state.title}</div>
        <button onClick={this.onClick.bind(this)}>按钮</button>
        {this.props.name}
        {this.props.age}
      </div>
    );
  }
}

export default class DemoRef extends Component {
  handle() {
    console.log("🟢 [Logger:]  🟦 DemoRef 🟦 handle 🟦 this.input", this.input);
    console.log("🟢 [Logger:]  🟦 DemoRef 🟦 handle 🟦 this.alert", this.alert);
    let value = this.input.value;
  }
  render() {
    return (
      <div>
        <input type='text' ref={(input) => (this.input = input)} />
        <button onClick={this.handle.bind(this)}>按钮1</button>
        <Alert ref={ (alert) => { this.alert = alert; } }/>
      </div>
    );
  }
}

TinyReact.render(
  <DemoRef />,
  document.getElementById('root'),
);
