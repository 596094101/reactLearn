import React, { Component } from 'react'

export default class FruitList extends Component {
  render() {
    const { fruits = [], setFruits } = this.props
    const delFruit = delIndex => {
      debugger
      const tem = [...fruits];
      tem.splice(delIndex, 1)
      setFruits(tem);
    }
    return(
      <div>
        {fruits.map((item, index) => {
          return <p key={index} onClick={() => delFruit(index)}>{item}</p>
        })}
      </div>
    )
  }
}