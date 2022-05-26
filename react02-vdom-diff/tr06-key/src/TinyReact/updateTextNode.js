export default function updateTextNode (vdom, oldVDom, oldDom) {
  if (vdom.props.textContent !== oldVDom.props.textContent) {
    oldDom.textContent = vdom.props.textContent;
    oldDom._vdom = vdom; // 更新dom元素挂载的vdom
  }
}