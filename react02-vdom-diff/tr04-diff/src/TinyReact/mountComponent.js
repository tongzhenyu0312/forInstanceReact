import isComponent from './isComponent';
import isFunctionComponent from './isFunctionComponent';
import mountNativeElement from './mountNativeElement';

export default function mountComponent (vdom, container) {
  // 类组件 or 函数组件
  let nextVDom = null;
  if (isFunctionComponent(vdom)) {
    console.log('函数组件')
    nextVDom = buildFunctionComponent(vdom);
  } else {
    console.log('类组件')
    nextVDom = buildClassComponent(vdom);
  }

  if (isComponent(nextVDom)) {
    // vdom仍然是一个组件
    mountComponent(nextVDom, container);
  } else {
    mountNativeElement(nextVDom, container);
  }

  console.log("🚀 Logger:  - mountComponent  - nextVDom", nextVDom);
}

function buildClassComponent (vdom) {
  const componentIns = new vdom.type(vdom.props || {});
  console.log("🚀 Logger:  - buildClassComponent  - componentIns", componentIns);
  const nextVDom = componentIns.render();
  return nextVDom;
}

function buildFunctionComponent (vdom) {
  return vdom.type(vdom.props || {}); // 防止props为空
}