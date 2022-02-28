import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header.jsx';
import { Provider } from './context.js';

/**
 * context提供默认数据，并提供组件消费的能力
 * Provider提供数据，其数据只可以被其后台组件消费
 * 组件接收数据，可以通过this.context 也可以通过 Context组件
 */

class App extends React.Component {
  constructor(...args) {
    super();
    this.state = {
      pageShow: false,
    };
  }

  render() {
    return (
      <div>
        {/* 数据由provider提供 */}
        <Provider value='context-data'>
          <Header></Header>
        </Provider>
        {/* 数据由context提供 */}
        <Header></Header>
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));
