export default function updateNodeElement (newElement, vdom) {
  const newProps = vdom.props;
  Object.keys(newProps).forEach((propName) => {
    const propValue = newProps[propName];
    if (propName.slice(0,2) === 'on') {
      // 事件属性(onClick...)
      const eventName = propName.toLowerCase().slice(2);
      document.addEventListener(eventName, propValue);
    } else if (propName === 'value' || propName === 'checked') {
      newElement[propName] = propValue;
    } else if (propName !== 'children') {
      newElement.setAttribute(propName === 'className' ? 'class' : propName, propValue)
    }
  })
}