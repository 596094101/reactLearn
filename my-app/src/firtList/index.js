import React, { Component } from 'react'

export default class FruitList extends Component {
  render() {
    const { fruits = [] } = this.props
    return(
      <div>
        {fruits.map((item, index) => {
          return <p key={index}>{item}</p>
        })}
      </div>
    )
  }
}