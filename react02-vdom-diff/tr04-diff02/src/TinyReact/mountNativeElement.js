import mountElement from "./mountElement";
import createDOMElement from './createDOMElement';
import unMountNode from "./unMountNode";

/**
 * 将虚拟dom转为真实dom，挂载到容器dom
 * ⚠️：此处最外层虚拟dom一定是普通虚拟dom（vdom.type === div/...）
 * @param {*} vdom 
 * @param {*} container 
 * @param {*} oldDOM 
 */
export default function mountNativeElement(vdom, container, oldDOM) {
  if (oldDOM) {
    unMountNode(oldDOM);
  }

  let newElement = createDOMElement(vdom);
  vdom?.component?.setDOM(newElement);
  
  container.appendChild(newElement);
}
