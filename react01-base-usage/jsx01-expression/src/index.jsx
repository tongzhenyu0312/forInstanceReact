import React from 'react';
import ReactDOM from 'react-dom';

// JSX 本身其实也是一种表达式(对象)，将它赋值给变量，当作参数传入，作为返回值都可以。

const user = {
  firstName: 'Harper',
  lastName: 'Perez',
};

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

function getGreeting(user) {
  return <h1>Hello, { user? formatName(user) : 'Stranger'}</h1>
}

ReactDOM.render(getGreeting(user), document.getElementById('app'));
