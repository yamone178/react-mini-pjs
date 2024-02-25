import React, { useRef, useState } from 'react'
import { useOutsideClick } from './useOutsideClick'

const OutsideClick = () => {

    const [content, setContent] = useState(true)

    const clickRef = useRef()

    useOutsideClick(clickRef, ()=>setContent(false))
  return (
    <div ref={clickRef} className=' w-[300px] mx-auto'>

    <button onClick={()=>setContent(!content)}
    className='p-2 m-5 text-white bg-black'> Show Content</button>
        <div>
        {
            content && <div><h2>This is Title</h2>
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste, quae. Incidunt aspernatur ratione eaque et nesciunt a tempora eius repellendus id, hic aperiam sint odio labore doloremque recusandae deserunt dolores!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur blanditiis impedit iste. Dolorem ratione sit quidem quae animi. Fugit itaque cum nobis, corporis consequuntur eius temporibus atque molestias quisquam architecto!</p>
            </div>
        }
        </div>
      
    </div>
  )
}

export default OutsideClick
