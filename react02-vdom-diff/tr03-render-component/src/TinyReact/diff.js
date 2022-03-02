import mountElement from './mountElement.js';

export default function diff (vdom, container, oldVdom) {
  // 如果oldVdom不存在，直接使用vdom构建真实dom，渲染到container上
  // vdom也存在判断（是否为组件vdom）
  if (!oldVdom) {
    mountElement(vdom, container);
  }
}