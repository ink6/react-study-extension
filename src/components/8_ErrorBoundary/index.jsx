import React, { Component } from 'react'
import Child from './Child'
export default class Demo extends Component {
  state = { errorMsg: '' } // 用于标识子组件是否产生错误

	//当子组件出现报错时候，会触发getDerivedStateFromError调用，并携带错误信息
  static getDerivedStateFromError(error) {
    return { errorMsg: error }
  }

  componentDidCatch () {
    console.log('此处统计错误，反馈给服务器，用于通知编码人员进行bug的解决');
  }
  render() {
    return (
      <div>
        <h2>父组件</h2>
        <hr />
        {
          !this.state.errorMsg
          ? <Child />
          : <h3>你犯错啦 后台</h3>
        }
        
      </div>
    )
  }
}
