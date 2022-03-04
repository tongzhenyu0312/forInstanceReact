import React from 'react';
import TinyReact from './TinyReact';

const oldVDom = (
  <div className='container'>
    <h1>你好 Tiny React</h1>
    <h2 data-test="1">(编码必杀技)</h2>
    <div>
      嵌套1 <div>嵌套 1.1</div>
    </div>
    <h3>(观察: 这个将会被改变)</h3>
    {2 == 1 && <div>如果2和1相等渲染当前内容</div>}
    {2 == 2 && <div>2</div>}
    <span>这是一段内容</span>
    <button onClick={() => alert('你好')}>点击我</button>
    <h3>这个节点类型会被替换</h3>
    2, 3
    <input type="text" value={123}/>
  </div>
);
console.log("🚀 Logger: 老的虚拟dom - oldVDom ", oldVDom);



const newVDom = (
  <div className='container'>
    <h1>你好 Tiny React</h1>
    <h2 data-test="123">(编码必杀技)</h2>
    <div>
      嵌套1 <div>嵌套 1.1</div>
    </div>
    <h3>(观察: 这个将会被改变)</h3>
    {2 == 1 && <div>如果2和1相等渲染当前内容</div>}
    {2 == 2 && <div>2</div>}
    {/* <span>这是一段修改后的内容</span> */}
    <button onClick={() => alert('你好!!!')}>点击我</button>
    <h6>这个节点类型会被替换为H6</h6>
    2, 3
    <input type="text"/>
  </div>
);
console.log("🚀 Logger: 新的虚拟dom - newVDom", newVDom);

TinyReact.render(oldVDom, document.getElementById('root'));

setTimeout(() => {
  TinyReact.render(newVDom, document.getElementById('root'));
}, 3000)
