import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

function Example () {
  useEffect(() => {
    console.log('use effect')
    return () => {
      console.log('destroyed')
    }
  })
  console.log('render Example')
  return <div>Example</div>
}




function Counter() {
  const [count, setCount] = useState(0)

  function handle() {
    setCount(count + 1)
    setCount(count + 2)
  }

  return (
    <div>
      <div>{count}</div>
      <button onClick={handle}>递增</button>
    </div>
  )
}

// function App() {
//   console.log('render App')
//   useEffect(() => {
//     this.setS
//   })

//   return (
//     <div>
//       <div>App</div>
//       <Example></Example>
//     </div>
//   )
// }

class App extends React.Component {
  
  render() {
    return (
      <Counter></Counter>
    )
  }
}

ReactDOM.render(<App></App>, document.getElementById('root'));
