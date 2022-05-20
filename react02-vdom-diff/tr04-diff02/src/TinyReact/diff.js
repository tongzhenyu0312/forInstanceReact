import createDOMElement from './createDOMElement.js';
import isComponent from './isComponent.js';
import mountElement from './mountElement.js';
import updateNodeProps from './updateNodeElement.js';
import updateTextNode from './updateTextNode.js';
import unMountNode from './unMountNode.js';

export default function diff(vdom, container, oldDom) {
  const oldVDom = oldDom && oldDom._vdom;
  
  /**
   * 若没有老的虚拟dom，直接将虚拟dom转换为真实dom，渲染到页面上
   * 若以前渲染过，有老的虚拟dom，比对新的虚拟dom和老的虚拟dom，将不同的地方转换为真实dom，渲染到页面上
   */
  if (!oldDom) {
    mountElement(vdom, container);
  } else if (oldVDom && vdom.type === oldVDom.type) {
    if (vdom.type === 'text') {
      // 文本节点-更新内容到真实dom
      updateTextNode(vdom, oldVDom, oldDom);
    } else {
      updateNodeProps(oldDom, vdom, oldVDom);

      // 元素节点-更新属性
      vdom.children.forEach((child, index) => {
        // 暂时通过index来获取child对应的oldDom
        diff(child, oldDom, oldDom.childNodes[index]);
      });

      // 删除旧节点的子节点，判断依据是旧节点的子节点个数大于新节点的子节点个数
      const oldChildNodes = oldDom.childNodes;
      if (oldChildNodes.length > vdom.children.length) {
        // 有节点需要被删除
        for (let i = oldChildNodes.length - 1; i > vdom.children.length - 1; i--) {
          unMountNode(oldChildNodes[i])
          // oldDom.removeChild(oldChildNodes[i]);
          // oldChildNodes[i].remove();
        }
      }
    }
  } else if (vdom.type !== oldVDom.type && !isComponent(vdom)) {
    // 虚拟节点类型不同（刨除组件）
    const newElement = createDOMElement(vdom);
    oldDom.parentNode.replaceChild(newElement, oldDom);
  }
}

/**
 * diff比较的特点：
 * - 同级比较
 * - 深度优先
 */
