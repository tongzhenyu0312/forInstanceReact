export default function isFunctionComponent (vdom) {
  const type = vdom.type;
  return type && typeof type === 'function' && !(type.prototype && type.prototype.render);
}