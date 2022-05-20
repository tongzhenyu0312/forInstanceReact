import mountNativeElement from './mountNativeElement.js';
import isComponent from './isComponent';
import mountComponent from './mountComponent';

/**
 * 将虚拟dom，转换为真实dom，挂载到页面指定dom容器内
 * @param {*} vdom 
 * @param {*} container 
 */
export default function mountElement (vdom, container) {
  // 虚拟dom分为 普通虚拟dom 和 组件虚拟dom，分别处理
  if (isComponent(vdom)) {
    mountComponent(vdom, container);
  } else {
    mountNativeElement(vdom, container)
  }
}