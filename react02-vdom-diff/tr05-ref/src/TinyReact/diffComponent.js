import mountElement from "./mountElement";
import updateComponent from "./updateComponent";


/**
 * 判断新旧组件是否相同
 * @param {*} vdom 新的virtual dom（其type属性，指向组件类）
 * @param {*} oldComponent 老的组件实例
 * @returns 
 */
function isSameComponent (vdom, oldComponent) {
  return oldComponent && oldComponent.constructor  === vdom.type;
}

/**
 * 组件更新
 * @param {*} vdom 组件的virtual dom（注意区分组件的virtual dom与组件render的virtual dom）
 * @param {*} oldComponent 老组件的实例（可以用来调用组件的生命周期函数）
 * @param {*} oldDOM 老的DOM（可通过其获取老的组件render的virtual dom）
 * @param {*} container 容器（可在新旧组件不同时，直接完成渲染）
 */
export default function diffComponent (vdom, oldComponent, oldDOM, container) {
  if (isSameComponent(vdom, oldComponent)) {
    // 新旧组件相同
    updateComponent(vdom, oldComponent, oldDOM, container)
  } else {
    // 新旧组件不同，直接渲染即可
    mountElement(vdom, container, oldDOM)
  }
}