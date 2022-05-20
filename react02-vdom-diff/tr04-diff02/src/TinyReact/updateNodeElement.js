/**
 * 给新dom元素添加属性
 * @param {*} newElement 一个新的dom
 * @param {*} vdom 这个新dom对应的虚拟dom
 * @param {*} oldVDom 原来的虚拟dom
 */
export default function updateNodeElement (newElement, vdom, oldVDom) {
  const newProps = vdom.props;
  const oldProps = (oldVDom && oldVDom.props) || {};

  Object.keys(newProps).forEach((propName) => {
    const propValue = newProps[propName];
    const oldPropValue = oldProps[propName];

    if (propValue !== oldPropValue) {
      if (propName.slice(0,2) === 'on') {
        // 事件属性(onClick...)
        const eventName = propName.toLowerCase().slice(2);
        if (oldPropValue) {
          // 删除原有的事件处理函数
          newElement.removeEventListener(eventName, oldPropValue);
        }
        newElement.addEventListener(eventName, propValue);
      } else if (propName === 'value' || propName === 'checked') {
        newElement[propName] = propValue;
      } else if (propName !== 'children') {
        // 添加标签属性，实际的dom元素无法通过原型链获取到，必须通过getAttribute
        newElement.setAttribute(propName === 'className' ? 'class' : propName, propValue)
      }
    }
  })

  // 判断属性被删除-旧属性名在新属性中不存在值
  Object.keys(oldProps).forEach((propName) => {
    const propValue = newProps[propName];
    const oldPropValue = oldProps[propName];
    if (!propValue) {
      // 若新值不存在，说明属性被删除了
      if (propName.slice(0,2) === 'on') {
        const eventName = propName.toLowerCase().slice(2);
        newElement.removeEventListener(eventName, oldPropValue);
      } else if (propName !== 'children') {
        // removeAttribute可以移除 value checked属性
        newElement.removeAttribute(propName === 'className' ? 'class' : propName, propValue)
      }
    }
  })
}