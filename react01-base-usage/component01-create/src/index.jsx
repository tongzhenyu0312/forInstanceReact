 // 必须引入React，因为jsx的react元素会被编译为React.createElement
import React from 'react';
import ReactDOM from 'react-dom';

// 类组件
class ClassComponent extends React.Component {
  render() {
    return (
      <div>类组件</div>
    )
  }
}

// 函数组件
const FunctionComponent = () => {
  return <div>函数组件</div>
}

const App = (
  <div>
    <ClassComponent></ClassComponent>
    <FunctionComponent></FunctionComponent>
  </div>
)

ReactDOM.render(App, document.getElementById('app'));
