export default function createElement(type, props, ...children) {
  const childElements = [].concat(...children).reduce((result, child) => {
    // 2. 刨除false true null
    if (child !== null && child !== true && child !== false) {
      // 1. 处理文本
      if (child instanceof Object) {
        result.push(child);
      } else {
        result.push(createElement('text', { textContent: child }));
      }
    }
    return result;
  }, []);

  // 3. 补充props.children
  return {
    type,
    props: Object.assign({ children: childElements }, props),
    children: childElements,
  };
}
