/**
 * 判断虚拟dom是否是组件虚拟dom
 * 组件虚拟dom的type是一个函数
 * @param {*} vdom 
 * @returns 
 */
export default function isComponent (vdom) {
  return vdom && typeof (vdom.type) === 'function';
}