import React, { Component } from 'react'

export default class Child extends Component {
  state = {
    // stus: [
    //   { id: '001', name: '温蒂', age: 18 },
    //   { id: '002', name: '迪卢克', age: 19 },
    //   { id: '003', name: '甘雨', age: 18 }
    // ]
    stus: 'hhhhhh'
  }
  render() {
    return (
      <div>
        <h2>子组件</h2>
        <ul>
          { 
            this.state.stus.map(stu => <li key={ stu.id }>{ stu.name } --- { stu.age } </li>)
          }
        </ul>
      </div>
    )
  }
}
