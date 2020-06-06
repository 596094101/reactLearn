import React, { useEffect, useReducer } from 'react';
import { Button } from 'antd';
import FiurtList from '../fiurtList';
import AddFruit from '../addFruit';

function fruitReducer(state = [], actions) {
  switch(actions.type) {
    case 'replace':
      return [...actions.payload]
    case 'init':
      return [...actions.payload]
    case 'add':
      return [...state, actions.payload]
    default:
      return state
  }
}

export default function FiurtListReducer(props) {
  const [fruits, dispatch] = useReducer(fruitReducer, []);
  useEffect(() => {
    setTimeout(() => {
      dispatch({type: 'init', payload: ["apple", "bannan"]})
      console.log(1111111111)
    }, 1000)
  }, [])
  return(
    <div>
      <h1>lalall</h1>
      <Button type="primary">lalal</Button>
      <FiurtList fruits={fruits} setFruits={newList => dispatch({type: 'replace', payload: newList})} />
      <AddFruit setFriuits={name => dispatch({type: 'add', payload: name})} fruits={fruits} />
    </div>
  )
}