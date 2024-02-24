import React, { useState } from 'react'
import { MyContext } from './MyContext'
import Child from './Child'


const Parent = () => {

    const [text, setText] = useState('')

  return (
    <div>
        <MyContext.Provider value={{text, setText}}>
            <Child />
        </MyContext.Provider>
    </div>
  )
}

export default Parent