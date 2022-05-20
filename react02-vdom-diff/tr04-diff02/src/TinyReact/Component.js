import diff from './diff';
import render from './render';

export default class Component {
  constructor(props) {
    this.props = props;
  }

  setState(state) {
    this.state = Object.assign(this.state, state || {});
    const newVirtualDOM = this.render();
    const oldDOM = this.getDOM();
    diff(newVirtualDOM, oldDOM.parentNode, oldDOM)
  }

  setDOM(dom) {
    this._dom = dom;
  }

  getDOM() {
    return this._dom;
  }
}

