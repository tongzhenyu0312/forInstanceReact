import React from 'react';
import TinyReact from './TinyReact';

function Demo() {
  return <div>Hello</div>;
}

// const Heart = () => (<div>&hearts;</div>)
// const Heart = () => (<Demo></Demo>)
const Heart = (props) => (
  <div>
    &hearts;<Demo></Demo>
    title: { props.title }
  </div>
);

const HeartVdom = <Heart title='Hello React'></Heart>;
console.log('🚀 Logger:  - HeartVdom', HeartVdom);

TinyReact.render(HeartVdom, document.getElementById('root'));
