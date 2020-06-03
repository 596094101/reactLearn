import React, { useState } from 'react';

export default function AddFriut(props) {
  const [name, setName] = useState('')
  const valueChange = (val) => {
    setName(val.target.value)
  }
  const addFriut = () => {
    const { setFriuits, fruits } = props;
    const newFruits = fruits.concat(name)
    setFriuits(newFruits);
    setName('')
  }
  return(
    <div>
      <input type="text" onChange={valueChange} />
      <button onClick={addFriut}>添加水果</button>
    </div>
  )
}