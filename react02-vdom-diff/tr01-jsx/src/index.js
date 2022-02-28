// JSX是一种浏览器无法直接识别的语法，通过@babel/preset-env里的插件，可以将其转换为React.createElement()的JS语法，运行时返回的是vdom
let Demo = (
  <div className='container'>
    <h3>Hello React</h3>
    <p>React is great </p>
  </div>
);
