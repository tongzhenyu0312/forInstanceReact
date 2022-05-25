import createDOMElement from './createDOMElement.js';
import isComponent from './isComponent.js';
import mountElement from './mountElement.js';
import updateNodeProps from './updateNodeElement.js';
import updateTextNode from './updateTextNode.js';
import unMountNode from './unMountNode.js';
import diffComponent from './diffComponent.js';

export default function diff(vdom, container, oldDOM) {
  // 原来的
  const oldVDom = oldDOM && oldDOM._vdom;
  const oldComponent = oldVDom?.component;
  
  /**
   * 若没有老的虚拟dom，直接将虚拟dom转换为真实dom，渲染到页面上
   * 若以前渲染过，有老的虚拟dom，比对新的虚拟dom和老的虚拟dom，将不同的地方转换为真实dom，渲染到页面上
   */
  if (!oldDOM) {
    // 挂载
    mountElement(vdom, container);
  } else if (oldVDom && vdom.type === oldVDom.type) {
    // 渲染普通的virtual dom（同层类型相同）
    if (vdom.type === 'text') {
      // 文本节点-更新内容到真实dom
      updateTextNode(vdom, oldVDom, oldDOM);
    } else {
      updateNodeProps(oldDOM, vdom, oldVDom);

      // 元素节点-更新属性
      vdom.children.forEach((child, index) => {
        // 暂时通过index来获取child对应的oldDom
        diff(child, oldDOM, oldDOM.childNodes[index]);
      });

      // 删除旧节点的子节点，判断依据是旧节点的子节点个数大于新节点的子节点个数
      const oldChildNodes = oldDOM.childNodes;
      if (oldChildNodes.length > vdom.children.length) {
        // 有节点需要被删除
        for (let i = oldChildNodes.length - 1; i > vdom.children.length - 1; i--) {
          unMountNode(oldChildNodes[i])
          // oldDOM.removeChild(oldChildNodes[i]);
          // oldChildNodes[i].remove();
        }
      }
    }
  } else if (vdom.type !== oldVDom.type && !isComponent(vdom)) {
    // 渲染普通的virtual dom(同层类型不同)
    const newElement = createDOMElement(vdom);
    oldDOM.parentNode.replaceChild(newElement, oldDOM);
  } else if (isComponent(vdom)) {
    // 渲染组件
    diffComponent(vdom, oldComponent, oldDOM, container)
  }
}

/**
 * diff比较的特点：
 * - 同级比较
 * - 深度优先
 */
