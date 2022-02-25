import React from 'react';
import ReactDOM from 'react-dom';

const Person = props => (
  <input type="text" value={props.name} onChange={props.onChangeInput}/>
)

// 函数组件没有state，所以也叫作 无状态组件
// 类组件的state数据，与更改state数据的方式：setState(保证页面的更新)
class ComponentClassPerson extends React.Component {
  constructor() {
    super();
    this.state = {
      name: 'tongzhenyu',
      age: 30,
    };
  }

  changePerson = (e, name) => {
    this.setState({
      name: e.target.value,
    });
  };

  render() {
    return (
      <div>
        <div>ComponentClassPerson:</div>
        <div>{this.state.name}</div>
        <div>{this.state.age}</div>
        <button onClick={this.changePerson}>changePerson</button>
        {/* 
        双向数据绑定：1. 数据更改，视图更新 2. 视图更改，数据更新
        用户主要使用表单元素来进行视图的更改
         */}
        <Person name={this.state.name} onChangeInput={this.changePerson}></Person>
      </div>
    );
  }
}

const App = (
  <div>
    <ComponentClassPerson></ComponentClassPerson>
  </div>
);

ReactDOM.render(App, document.getElementById('app'));
