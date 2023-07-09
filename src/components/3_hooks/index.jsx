import React, { useState, useEffect, useRef } from 'react'
import ReactDOM from 'react-dom'
// class Demo extends React.Component {
//   state = { count: 0 }
//   myRef = React.createRef()
//   add = () => {
//     this.setState(state => ({ count: state.count + 1}))
//   }
//   getInputInfo = () => {
//     console.log(this.myRef.current.value);
//   }
//   unmount = () => {
//     ReactDOM.unmountComponentAtNode(document.getElementById('root'))
//   }
//   componentDidMount () {
//     this.timer = setInterval(() => {
//       this.setState(state => ({ count: state.count + 1 }))
//     }, 1000)
//   }
//   componentWillUnmount = () => {
//     clearInterval(this.timer)
//   }
//   render() {
//     return (
//       <div>
//         <h3>当前求和为： { this.state.count }</h3>
//         <button onClick={ this.add }>加一</button>
//         <button onClick={ this.unmount }>卸载组件</button>
//         <hr />
//         <input type="text" ref={ this.myRef } /> &nbsp;
//         <button onClick={ this.getInputInfo }>获取文本框的输入内容</button>
//       </div>
//     )
//   }
// }

function Demo () {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('tom')
  const myRef = useRef()
  /*
    useEffect  Hook 类似这三个函数的组合 componentDidMount() componentDidUpdate() componentWillUnmount() 
      1、第二个参数不传表示监听所有由useState创建的变量的 componentDidMount 和 componentDidUpdate 
      2、第二个参数传[]表示监听所有变量的componentDidMount
      3、传具体的值（[count]） 则监听具体值的 componentDidUpdate
  */
  useEffect(() => {
    // console.log(count, name);
    const timer = setInterval(() => {
      // console.log(count, '---', name);
      // setCount(count + 1) // 错误 -  当第二个参数传入[]时， 不可以使用这种方式 因为count值没有改变过 React Hook useEffect has a missing dependency: 'count'. Either include it or remove the dependency array. You can also do a functional update 'setCount(c => ...)' if you only need 'count' in the 'setCount' call  react-hooks/exhaustive-deps
      setCount(count => count + 1)
    }, 1000)
    return () => { // useEffect 第一个参数的返回值是一个函数表示调用 componentWillUnmount
      clearInterval(timer)
    }
  }, []) 
  
  // 递加
  function add () {
    // setCount(count + 1 ) // 第一种写法
    setCount(count => count + 1 ) // 第二种写法 - 传入一个函数
  }
  // 修改名称
  function changeName () {
    setName(name + '!')
  }
  
  // 获取文本框输入的数据
  function getInputInfo () {
    console.log(myRef);
    console.log(myRef.current.value);
  }
  // 卸载组件
  function unmount () {
    ReactDOM.unmountComponentAtNode(document.getElementById('root'))
  }
  return (
    <div>
      <h3>当前求和为：{ count }, { name } </h3>
      <button onClick={ add }>加一</button>
      <button onClick={ changeName }>修改名称</button>
      <button onClick={ unmount }>卸载组件</button>
      <hr />
      <input type="text" ref={ myRef } /> &nbsp;
      <button onClick={ getInputInfo }>获取文本框的输入内容</button>
    </div>
  )
}

export default Demo