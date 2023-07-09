import React, { Component } from 'react'

export default class Demo extends Component {
  /**
   setState更新状态的2种写法
	(1). setState(stateChange, [callback])------对象式的setState
            1.stateChange为状态改变对象(该对象可以体现出状态的更改)
            2.callback是可选的回调函数, 它在状态更新完毕、界面也更新后(render调用后)才被调用
				
	(2). setState(updater, [callback])------函数式的setState
            1.updater为返回stateChange对象的函数。
            2.updater可以接收到state和props。
            4.callback是可选的回调函数, 它在状态更新、界面也更新后(render调用后)才被调用。
总结:
		1.对象式的setState是函数式的setState的简写方式(语法糖)
		2.使用原则：
				(1).如果新状态不依赖于原状态 ===> 使用对象方式
				(2).如果新状态依赖于原状态 ===> 使用函数方式
				(3).如果需要在setState()执行后获取最新的状态数据, 
					要在第二个callback函数中读取
   */

  state = { count: 0}
  add = () => {
		//对象式的setState
    // const { count } = this.state
    // this.setState({
    //   count: count + 1
    // }, () => {
    //   console.log('setState第二个参数内获取的值：', this.state.count );
    // })

		//函数式的setState
    this.setState((state, props) => {
      console.log('接收到的参数是：', state, props);
      return {
        count: state.count
      }
    }, () => {
      console.log('setState第二个参数内获取的值：', this.state.count );
    })
    console.log('setState外侧的值：', this.state.count );

  }
  render() {
    const { count } = this.state
    return (
      <div>
        <h2>当前求和为：{ count } </h2>
        <button onClick={ this.add }>加一</button>
      </div>
    )
  }
}
