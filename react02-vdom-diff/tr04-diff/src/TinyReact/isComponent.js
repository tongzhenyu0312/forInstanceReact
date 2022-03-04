export default function isComponent (vdom) {
  return vdom && typeof (vdom.type) === 'function';
}