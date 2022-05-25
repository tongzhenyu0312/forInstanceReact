import diff from "./diff";

export default function updateComponent (vdom, oldComponent, oldDOM, container) {
  const nextProps = vdom.props;
  const nextState = oldComponent.state;
  const prevProps = oldComponent.props;
  const shouldComponentUpdate = oldComponent.shouldComponentUpdate(nextProps, nextState);

  oldComponent.componentWillReceiveProps(nextProps);
  if (shouldComponentUpdate) {
    oldComponent.componentWillUpdate(nextProps, nextState);
    oldComponent.updateProps(nextProps);
    const virtualDOM = oldComponent.render();
    virtualDOM.component = oldComponent;
    diff(virtualDOM, container, oldDOM);
    oldComponent.componentDidUpdate(prevProps);
  }
}