import isFunctionComponent from './isFunctionComponent';

export default function mountComponent (vdom, container) {
  // 类组件 or 函数组件
  if (isFunctionComponent(vdom)) {
    console.log('函数组件')
  } else {
    console.log('类组件')
  }
}