import React from 'react';
import ReactDOM from 'react-dom';

/**
 * props数据传递的注意点
 * 1.props数据在组件内部不允许被修改
 * 2.props元数据更改时，组件会自动更新
 */

/**
 * 单向数据流：
 * 1. 自顶而下的流动方向
 * 2. 子组件不可直接修改来自父组件传递的数据，需要通过调用父组件方法，通知父组件完成数据修改
 * 3. 数据的修改，依赖数据的组件会自动更新视图
 */

// 类组件
class ComponentClassPerson extends React.Component {
  // 类组件的默认props
  static defaultProps = {
    name: '类组件-个人-姓名空缺',
    age: '类组件-个人-年龄空缺',
  };

  render() {
    return (
      <div>
        <div>类组件：</div>
        <div>{this.props.name}</div>
        <div>{this.props.age}</div>
        <div>children：</div>
        <div>{this.props.children}</div>
        <div>---------------------------</div>
      </div>
    );
  }
}

// 函数组件
const ComponentFunctionPerson = ({ name, age }) => {
  return (
    <div>
      <div>函数组件：</div>
      <div>{name}</div>
      <div>{age}</div>
    </div>
  );
};

// 函数组件的默认props
ComponentFunctionPerson.defaultProps = {
  name: '函数组件-个人-姓名空缺',
  age: '函数组件-个人-年龄空缺',
};

const memberA = { name: 'tongzhenyu', age: 30 };
const memberB = { name: 'zhangjing', age: 30 };

const App = (
  <div>
    <ComponentClassPerson name={memberA.name} age={memberA.age}>
      <div>我是ComponentClassPerson的children</div>
    </ComponentClassPerson>
    <ComponentFunctionPerson
      // name={memberB.name}
      age={memberB.age}></ComponentFunctionPerson>
  </div>
);

ReactDOM.render(App, document.getElementById('app'));
