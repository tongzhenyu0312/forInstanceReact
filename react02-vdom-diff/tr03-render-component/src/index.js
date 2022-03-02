import React from 'react';
import TinyReact from './TinyReact';

// function Demo() {
//   return <div>Hello</div>;
// }

// const Heart = () => (<div>&hearts;</div>)
// const Heart = () => (<Demo></Demo>)
// const Heart = (props) => (
//   <div>
//     &hearts;<Demo></Demo>
//     title: { props.title }
//   </div>
// );

// const HeartVdom = <Heart title='Hello React'></Heart>;
// console.log('🚀 Logger:  - HeartVdom', HeartVdom);

class Alert extends TinyReact.Component {
  constructor(props) {
    super(props);
    // this.state = {};
  }

  render() {
    return (
      <div>
        { this.props.name }
        { this.props.age }
      </div>
    )
  }
}

const AlertVDom = <Alert name='张三' age="20"></Alert>;

TinyReact.render(AlertVDom, document.getElementById('root'));
