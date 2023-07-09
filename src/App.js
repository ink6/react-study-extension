import React, { Component } from 'react'
import Demo from './components/8_ErrorBoundary'
export default class App extends Component {
  render() {
    return (
      <div a={1}>
        {/* 1_setState
        <Demo x={666} /> */}
        <Demo />
      </div>
    )
  }
}
