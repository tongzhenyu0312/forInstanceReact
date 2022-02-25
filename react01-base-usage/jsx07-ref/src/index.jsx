import React from 'react';
import ReactDOM from 'react-dom';

class Input extends React.Component{
  inputRef

  focus() {
    console.log('🚀 Logger:   Input   inputRef', this.inputRef);
    this.inputRef.focus();
  }

  render() {
    return (
      <input
        type='text'
        // 通过ref获取dom元素
        ref={(input) => {
          this.inputRef = input;
        }}
      />
    );
  }
}

let InputRef

function clickHandler () {
  console.log("🚀 Logger:   InputRef", InputRef);
  InputRef.focus();
}

const App = (
  <div>
    {/* 通过ref获取组件实例 */}
    <Input ref={(Input) => {InputRef = Input}}></Input>
    <button onClick={clickHandler}>按钮</button>
  </div>
);

ReactDOM.render(App, document.getElementById('app'));
