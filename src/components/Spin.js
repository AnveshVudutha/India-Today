import React, { Component } from 'react'
import spinner from './loader-9342_256.gif'

export default class Spinner extends Component {
  render() {
    return (
      <div className="text-center">
        <img src={spinner} style={{height:'3rem'}} alt="loading" />
      </div>
    )
  }
}
