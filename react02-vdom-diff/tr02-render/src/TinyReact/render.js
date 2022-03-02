import diff from './diff';

// 实现将vdom渲染到container中
export default function render (vdom, container, oldVdom) {
  // react diff
  diff(vdom, container, oldVdom);
}