import React, { Component } from 'react'
import './index.css'

// 创建Context容器对象
const MyContext = React.createContext()
// const { Provider, Consumer } = MyContext
export default class A extends Component {
  state = { username: '温蒂', age: 18 }
  render() {
    const { username, age } = this.state
    return (
      <div className='a-container'>
        <h2>这是A组件</h2>
        <h4>A组件用户名是： { username } ,年龄是：{ age }</h4>
        {/* 渲染子组时，外面包裹xxxContext.Provider, 通过value属性给后代组件传递数据 */}
        <MyContext.Provider value={ { username, age } }>
          <B />
        </MyContext.Provider>
      </div>
    )
  }
}

class B extends Component {
  render() {
    return (
      <div className='b-container'>
        <h2>这是B组件</h2>
        {/* <h4>A组件用户名是：,年龄是：</h4> */}
        <C></C>
      </div>
    )
  }
}

// 第一种方式： 仅适用于类组件 使用 static contextType = MyContext 声明 static contextType = xxxContext  使用this.context读取context中的value数据
// class C extends Component {
// 	//声明接收context
//   static contextType = MyContext
//   render() {
//     console.log(this);
//     const { username, age } = this.context
//     return (
//       <div className='c-container'>
//         <h2>这是C组件</h2>
//         <h4>A组件用户名是：{ username }, 年龄是：{ age }</h4>
//       </div>
//     )
//   }
// }

// 第二种方式: 函数组件与类组件都可以 使用 Consumer
class C extends Component {
  render() {
    return (
      <div className='c-container'>
        <h2>这是C组件</h2>
        <h4>A组件用户名是：
          <MyContext.Consumer>
            {/* value就是context中的value数据 */}
            {
              value => <span>{ value.username }, 年龄是：{ value.age }</span>
            }
          </MyContext.Consumer>
        </h4>
      </div>
    )
  }
}

// 函数式组件只能使用Consumer
// function C () {
//   return (
//     <div className='c-container'>
//       <h2>这是C组件</h2>
//       <h4>A组件用户名是：
//         <MyContext.Consumer>
//         {/* {
//           value => { return <span>{ value.username }, 年龄是：{ value.age } </span> }
//         } */}
//         {
//           value => <span>{ value.username }, 年龄是：{ value.age } </span>
//         }
//         </MyContext.Consumer>
//       </h4>
//     </div>
//   )
// }