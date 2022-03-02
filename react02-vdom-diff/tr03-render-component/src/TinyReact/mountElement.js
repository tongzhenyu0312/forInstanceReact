import mountNativeElement from './mountNativeElement.js';
import isFunction from './isFunction';
import mountComponent from './mountComponent';

export default function mountElement (vdom, container) {
  // Component vs nativeElement
  if (isFunction(vdom)) {
    // 组件的类型是function
    console.log('组件')
    mountComponent(vdom, container);
  } else {
    mountNativeElement(vdom, container)
  }
}