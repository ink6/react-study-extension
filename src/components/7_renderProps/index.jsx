import React, { Component } from 'react'
import './index.css'
export default class Demo extends Component {
  render() {
    return (
      <div className='demo'>
        <h2>我是Demo组件</h2>
        {/* <A x={101} /> */}

        {/* B组件是A组件的子组件 方式二 */}
        {/* <A>
          <B />
        </A> */}

        {/* B组件是A组件的子组件 方式三*/}
        <A render={ (name) =><B name={name} /> } />
      </div>
    )
  }
}

class A extends Component {
  state = { name: 'tom'}
  render() {
    console.log(this.props);
    const { name } = this.state
    return (
      <div className='a'>
        <h2>我是A组件 </h2>
        {/* B组件是A组件的子组件 方式一 */}
        {/* <B /> */}
        {/* B组件是A组件的子组件 方式二 缺点：无法传参 */}
        {/* { this.props.children } */}

        {/* B组件是A组件的子组件 方式三*/}
        { this.props.render(name) }
      </div>
    )
  }
}

class B extends Component {
  render() {
    return (
      <div className='b'>
        <h2>我是B组件 -- { this.props.name }</h2>
      </div>
    )
  }
}
