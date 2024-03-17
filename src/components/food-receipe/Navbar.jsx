import React, { useContext } from 'react'
import SearchBox from './SearchBox'
import { NavLink } from 'react-router-dom'
import  { GlobalContext } from './Context/GlobalState'

const Navbar = () => {

   
    
  return (
    <div className='flex justify-between'>
        <h2 className=' text-[25px] font-bold text-red-500 '>Food Receipe</h2>

        <SearchBox />

        <ul className='flex gap-3'>
            <li className=''>
                <NavLink to='/' 
                className="inline-block p-2 text-center bg-gray-300 rounded w-[100px] hover:bg-black hover:text-white ">Home</NavLink>
            </li>

            <li>
                <NavLink to='/favourites'
                 className="inline-block p-2 text-center bg-gray-300 rounded w-[100px] hover:bg-black hover:text-white " >Favourites</NavLink>
            </li>
        </ul>
    </div>
  )
}

export default Navbar