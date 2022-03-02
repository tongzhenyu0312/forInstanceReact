import mountElement from "./mountElement";
import createDOMElement from './createDOMElement';

export default function mountNativeElement(vdom, container) {
  let newElement = createDOMElement(vdom);

  vdom.children.forEach(vChild => {
    mountElement(vChild, newElement)
  });

  container.appendChild(newElement);
}
