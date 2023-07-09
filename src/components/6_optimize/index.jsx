import React, { PureComponent } from 'react'
import './index.css'



// export default class Father extends Component {
// PureComponent重写了shouldComponentUpdate(), 只有state或props数据有变化才返回true
// 注意:
// 只是进行state和props数据的浅比较, 如果只是数据对象内部数据变了, 返回false
// 不要直接修改state数据, 而是要产生新数据
// 项目中一般使用PureComponent来优化
export default class Father extends PureComponent {

  state = { carName: '奔驰', stus: ['王', '江', '陈']}
  changeCar = () => {
    // this.setState({ })
    this.setState({ carName: '宝马' })
    
    // PureComponent的弊端
    // 下面这种写法 使用PureComponent检测不到 因为obj.carName 修改的是原来的state里的carName 那么pureconmonent检测的时候会发现是一致的，从而造成问题
    // 而使用this.setState({ carName: '宝马' }) 相当于给carName新写了个”宝马“ 用的并不是state的carname了 是两个内存地址
    // let obj = this.state
    // obj.carName = '宝马'
    // this.setState(obj)
  }
 
  addstu = () => {
    // 使用PureComponent 会造成这段代码失效 因为setState的时候 修改的state里面的stus 
    // const { stus } = this.state
    // stus.unshift('刘')
    // this.setState({ stus })

    // 而这种写法是开辟了一个新的内存 再赋值给state.stus
    const { stus } = this.state
    this.setState({ stus: ['刘', ...stus] })
  }
  
  // shouldComponentUpdate(nextProps,nextState) {
  //   // console.log(this.state, nextState);
  //   // console.log(this.props, nextProps);
  //   // console.log(this.props.carName === nextState.carName);
  //   if (this.state.carName === nextState.carName) return false
  //   else return true
  // }
  render() {
    console.log('Father -- render');
    const { carName, stus } = this.state
    return (
      <div className='father'>
        <h2>我是父组件</h2>
        <h4>车的信息是：{ carName }</h4>
        <button onClick={ this.changeCar }>换车</button>
        <hr />
        <h4>数组： { stus }</h4>
        <button onClick={ this.addstu }>添加</button>
        <hr />
        <Child carName={ carName } />
        {/* <Child carName={ '迈巴赫' } /> */}
      </div>
    )
  }
}

class Child extends PureComponent {
  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log(this.props, nextProps);
  //   return !this.props.carName === nextProps
  // }
  render() {
    console.log('Child -- render');
    const { carName } = this.props
    return (
      <div className='child'>
        <h2>我是子组件</h2>
        <h4>车的信息是：{ carName }</h4>
      </div>
    )
  }
}
