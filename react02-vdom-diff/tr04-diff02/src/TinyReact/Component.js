import diff from './diff';
import render from './render';

export default class Component {
  constructor(props) {
    this.props = props;
  }

  // 生命周期函数
  componentWillMount() {}
  componentDidMount() {}
  componentWillReceiveProps(nextProps) {}
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps != this.props || nextState != this.state;
  }
  componentWillUpdate(nextProps, nextState) {}
  componentDidUpdate(prevProps, preState) {
    console.log("🟢 [Logger:]  🟦 Component 🟦 componentDidUpdate 🟦 prevProps", prevProps);
  }
  componentWillUnmount() {}

  updateProps(nextProps) {
    this.props = nextProps;
  }

  setState(state) {
    this.state = Object.assign(this.state, state || {});
    const newVirtualDOM = this.render();
    const oldDOM = this.getDOM();
    diff(newVirtualDOM, oldDOM.parentNode, oldDOM);
  }

  setDOM(dom) {
    this._dom = dom;
  }

  getDOM() {
    return this._dom;
  }
}
