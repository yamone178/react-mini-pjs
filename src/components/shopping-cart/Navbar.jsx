import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
       <ul className='flex gap-3'>
            <li className=''>
                <NavLink to='/' 
                className="inline-block p-2 text-center bg-gray-300 rounded w-[100px] hover:bg-black hover:text-white ">Home</NavLink>
            </li>

            <li>
                <NavLink to='/cart'
                 className="inline-block p-2 text-center bg-gray-300 rounded w-[100px] hover:bg-black hover:text-white " >Cart</NavLink>
            </li>
        </ul>
    </div>
  )
}

export default Navbar
