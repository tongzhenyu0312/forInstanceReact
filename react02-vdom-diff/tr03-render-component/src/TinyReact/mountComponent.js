import isComponent from './isComponent';
import isFunctionComponent from './isFunctionComponent';
import mountNativeElement from './mountNativeElement';

export default function mountComponent (vdom, container) {
  // 类组件 or 函数组件
  let nextVDom = null;
  if (isFunctionComponent(vdom)) {
    console.log('函数组件')
    nextVDom = buildFunctionComponent(vdom);
    console.log("🚀 Logger:  - mountComponent  - nextVDom", nextVDom);

    if (isComponent(nextVDom)) {
      // vdom仍然是一个组件
      mountComponent(nextVDom, container);
    } else {
      mountNativeElement(nextVDom, container);
    }
  } else {
    console.log('类组件')
  }
}

function buildFunctionComponent (vdom) {
  return vdom.type(vdom.props || {}); // 防止props为空
}