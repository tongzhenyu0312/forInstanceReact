import createDOMElement from './createDOMElement.js';
import isComponent from './isComponent.js';
import mountElement from './mountElement.js';
import updateNodeProps from './updateNodeElement.js';
import updateTextNode from './updateTextNode.js';
import unMountNode from './unMountNode.js';
import diffComponent from './diffComponent.js';

export default function diff(virtualDOM, container, oldDOM) {
  // 原来的
  const oldVirtualDOM = oldDOM && oldDOM._vdom;
  const oldComponent = oldVirtualDOM?.component;

  /**
   * 若没有老的虚拟dom，直接将虚拟dom转换为真实dom，渲染到页面上
   * 若以前渲染过，有老的虚拟dom，比对新的虚拟dom和老的虚拟dom，将不同的地方转换为真实dom，渲染到页面上
   */
  if (!oldDOM) {
    // 挂载
    mountElement(virtualDOM, container);
  } else if (oldVirtualDOM && virtualDOM.type === oldVirtualDOM.type) {
    // 渲染普通的virtual dom（同层类型相同）
    if (virtualDOM.type === 'text') {
      // 文本节点-更新内容到真实dom
      updateTextNode(virtualDOM, oldVirtualDOM, oldDOM);
    } else {
      updateNodeProps(oldDOM, virtualDOM, oldVirtualDOM);

      // 将oldDOM中带有key属性的子节点存储在一个缓存对象里
      const keyedElements = {};
      for (let i = 0; i < oldDOM.childNodes.length; i++) {
        const oldChildNode = oldDOM.childNodes[i];
        if (oldChildNode.nodeType === 1) {
          let key = oldChildNode.getAttribute('key');
          if (key) {
            keyedElements[key] = oldChildNode;
          }
        }
      }

      const hasNoKey = Object.keys(keyedElements).length === 0;

      if (hasNoKey) {
        // 元素节点-更新属性
        virtualDOM.children.forEach((child, index) => {
          // 暂时通过index来获取child对应的oldDom
          diff(child, oldDOM, oldDOM.childNodes[index]);
        });
      } else {
        // 循环 virtualDOM，通过子节点的key，查找老的子节点
        virtualDOM.children.forEach((child, index) => {
          const key = child.props.key;
          if (key) {
            const targetNode = keyedElements[key];
            if (targetNode) {
              // 位置判断
              if (
                oldDOM.childNodes[index] &&
                oldDOM.childNodes[index] !== targetNode
              ) {
                oldDOM.insertBefore(targetNode, oldDOM.childNodes[index]);
              }
            }
          }
        });
      }

      // 删除旧节点的子节点，判断依据是旧节点的子节点个数大于新节点的子节点个数
      const oldChildNodes = oldDOM.childNodes;
      if (oldChildNodes.length > virtualDOM.children.length) {
        // 有节点需要被删除
        for (
          let i = oldChildNodes.length - 1;
          i > virtualDOM.children.length - 1;
          i--
        ) {
          unMountNode(oldChildNodes[i]);
          // oldDOM.removeChild(oldChildNodes[i]);
          // oldChildNodes[i].remove();
        }
      }
    }
  } else if (
    virtualDOM.type !== oldVirtualDOM.type &&
    !isComponent(virtualDOM)
  ) {
    // 渲染普通的virtual dom(同层类型不同)
    const newElement = createDOMElement(virtualDOM);
    oldDOM.parentNode.replaceChild(newElement, oldDOM);
  } else if (isComponent(virtualDOM)) {
    // 渲染组件
    diffComponent(virtualDOM, oldComponent, oldDOM, container);
  }
}

/**
 * diff比较的特点：
 * - 同级比较
 * - 深度优先
 */


