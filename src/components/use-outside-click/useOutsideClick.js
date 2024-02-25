import React, { useEffect } from 'react'

export const useOutsideClick = (ref, handler) => {

    useEffect(()=>{
        function listener(event){

            if (!ref.current || ref.current.contains(event.target)) {
                console.log(ref.current);
                return
            }

          
            handler(event)

           
        }
        document.addEventListener('mousedown', listener)
        document.addEventListener('touchstart', listener)

        // unmount
        return()=>{
            document.removeEventListener('mousedown',listener)
            document.removeEventListener('touchstart', listener)
        }


    }, [handler, ref])

  return (
    <div>useOutsideClick</div>
  )
}
