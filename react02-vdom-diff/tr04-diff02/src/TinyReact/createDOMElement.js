import mountElement from './mountElement';
import updateNodeElement from './updateNodeElement';

/**
 * 将虚拟dom转为真实dom
 * ⚠️：最外层虚拟dom一定是一个普通虚拟dom
 * @param {*} vdom 虚拟dom
 * @returns 真实dom
 */
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
