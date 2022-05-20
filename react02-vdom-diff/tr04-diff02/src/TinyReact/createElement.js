/**
 * 递归创建虚拟dom
 * @param {*} type 
 * @param {*} props 
 * @param  {...any} children 
 * @returns 
 */
export default function createVDom(type, props, ...children) {
  const childElements = [].concat(...children).reduce((result, child) => { 
    if (child !== null && child !== true && child !== false) {
      // 刨除了child值为false true null
      if (child instanceof Object) {
        // 元素节点（虚拟）
        result.push(child);
      } else {
        // 文本节点（虚拟）
        result.push(createVDom('text', { textContent: child }, []));
      }
    }
    return result;
  }, []);

  // 每个虚拟dom的样子
  return {
    type,
    props: Object.assign({ children: childElements }, props),
    children: childElements,
  };
}
