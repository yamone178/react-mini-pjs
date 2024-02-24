import React, { useContext } from 'react'
import { MyContext } from './MyContext'

const Child = () => {
    const {text, setText} = useContext(MyContext)
  return (
    <div>
      <h1>{text}</h1>
      <button onClick={()=> setText('hello world')}>Click</button>
    </div>
  )
}

export default Child
