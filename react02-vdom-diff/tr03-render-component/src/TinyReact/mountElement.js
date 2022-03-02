import mountNativeElement from './mountNativeElement.js';
import isComponent from './isComponent';
import mountComponent from './mountComponent';

export default function mountElement (vdom, container) {
  // Component vs nativeElement
  if (isComponent(vdom)) {
    // 组件的类型是function
    console.log('组件')
    mountComponent(vdom, container);
  } else {
    mountNativeElement(vdom, container)
  }
}