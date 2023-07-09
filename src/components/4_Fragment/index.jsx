import React, { Component, Fragment } from 'react'

export default class Demo extends Component {
  render() {
    return (
      // <Fragment><Fragment>和 <></> 都是碎片化标签 最终都会转义成空标签 但是Fragment 可以写key值， <></>不可以
      <Fragment key="2">
        <input type="text" />
        <input type="text" />
      </Fragment>
    )
  }
}
