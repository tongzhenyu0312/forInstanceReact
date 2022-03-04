import mountElement from './mountElement';
import updateNodeElement from './updateNodeElement';


export default function createDOMElement(vdom) {
  let newElement = null;
  if (vdom.type === 'text') {
    newElement = document.createTextNode(vdom.props.textContent);
  } else {
    newElement = document.createElement(vdom.type);
    updateNodeElement(newElement, vdom);
    // 递归创建子节点
    vdom.children.forEach((child) => {
      mountElement(child, newElement);
    });
  }

  newElement._vdom = vdom;

  // 为元素添加属性
  return newElement;
}
