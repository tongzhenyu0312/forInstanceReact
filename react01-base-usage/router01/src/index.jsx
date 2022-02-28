import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, Routes, Switch } from 'react-router-dom';
import News from './News.jsx';

function Index() {
  return <div>首页</div>;
}

class App extends React.Component {
  constructor(...args) {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <div>App:</div>
        <Router>
          <Link to='/index'>index</Link>
          <div></div>
          <Link to='/news'>news</Link>
          <Routes>
            <Route path='/index' element={ <Index></Index> }></Route>
            <Route path='/news' element={ <News></News> }></Route>
          </Routes>
        </Router>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
