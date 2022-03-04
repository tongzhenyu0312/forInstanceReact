import diff from './diff';

/**
 * 将虚拟dom渲染到某个容器内
 * @param {*} vdom 
 * @param {*} container 
 */
export default function render (vdom, container) {
  // 内部调用diff算法
  diff(vdom, container, container.firstChild); // container(root).firstChild指向JSX的父元素
}