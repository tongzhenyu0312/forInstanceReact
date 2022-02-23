import React from 'react';
import ReactDOM from 'react-dom';

const persons = [{
  id: 1,
  name: '张三',
  age: 20
}, {
  id: 2,
  name: '李四',
  age: 15
}, {
  
  id: 3,
  name: '王五',
  age: 22
}]

const App = persons.map((person) => (<h1 key={person.id}>{person.name}</h1>))

ReactDOM.render(App, document.getElementById('app'));
