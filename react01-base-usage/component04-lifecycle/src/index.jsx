import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header.jsx';

class App extends React.Component {
  constructor(...args) {
    super();
    this.state = {
      pageShow: false,
    };
  }

  
  componentDidMount() {
    setTimeout(() => {
      this.setState({ pageShow: true });
    }, 2000)
  }
  

  render() {
    return (
      <div>
        <div>APP组件：</div>
        <Header pageShow={this.state.pageShow}></Header>
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));
