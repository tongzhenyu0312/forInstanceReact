import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Routes, Switch } from 'react-router-dom';

function Company () {
  return (<div>公司新闻</div>)
}

function Industry () {
  return (<div>行业新闻</div>)
}

export default class News extends Component {
  render() {
    return (
      <div>
        <div>新闻列表</div>
        <div>
        {/* 组件嵌套 */}
          <Link to={`${this.props.match.url}/company`}>company</Link>
          <Link to={`${this.props.match.url}/industry`}>industry</Link>
        </div>
        <div>
          <Routes>
            {/* 组件嵌套 */}
            <Route path={`${this.props.match.path}/company`} element={<Company></Company>}></Route>
            <Route path={`${this.props.match.path}/industry`} element={<Industry></Industry>}></Route>
          </Routes>
        </div>
      </div>
    )
  }
}
