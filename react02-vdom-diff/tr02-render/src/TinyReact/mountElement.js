import mountNativeElement from './mountNativeElement.js';

export default function mountElement (vdom, container) {
  // Component vs nativeElement
  mountNativeElement(vdom, container)
}