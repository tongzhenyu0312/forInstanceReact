import isComponent from './isComponent';
import isFunctionComponent from './isFunctionComponent';
import mountNativeElement from './mountNativeElement';

/**
 * 将组件虚拟dom渲染到指定的dom容器内
 * @param {*} vdom 组件虚拟dom
 * @param {*} container dom容器
 */
export default function mountComponent (vdom, container) {
  /**
   * 组件虚拟dom 也可分为 函数组件虚拟dom 和 类组件虚拟dom
   * 函数组件虚拟dom真实渲染的是 函数返回的结果
   * 类组件虚拟dom真实渲染的是 类实例render函数返回的结果
   */
  let renderedVDOM = null;
  if (isFunctionComponent(vdom)) {
    renderedVDOM = buildFunctionComponent(vdom);
  } else {
    renderedVDOM = buildClassComponent(vdom);
  }

  // 要被渲染的虚拟dom进一步
  if (isComponent(renderedVDOM)) {
    mountComponent(renderedVDOM, container);
  } else {
    mountNativeElement(renderedVDOM, container);
  }
}

/**
 * 获取类组件虚拟dom所render的虚拟dom
 * @param {*} vdom 类组件虚拟dom
 * @returns 类组件render的虚拟dom
 */
function buildClassComponent (vdom) {
  const component = new vdom.type(vdom.props || {});
  const classVirtualDOM = component.render();
  // 将组件实例对象挂载在其vdom上
  classVirtualDOM.component = component;
  return classVirtualDOM;
}

/**
 * 获取函数虚拟dom执行后返回的虚拟dom
 * @param {*} vdom 函数虚拟dom
 * @returns 函数虚拟dom执行得到的虚拟dom
 */
function buildFunctionComponent (vdom) {
  return vdom.type(vdom.props || {}); // 防止props为空
}