import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { GlobalContext } from './Context/GlobalState'


const SearchBox = () => {
    const {searchParam, setSearchParam, handleSearchSubmit} = useContext(GlobalContext)

      
  return (
    <div>
        <form onSubmit={handleSearchSubmit}>
            <input 
            className='w-[400px] rounded-xl h-[60px] p-2 bg-white/20 shadow-lg border border-black/35'
            placeholder='Search Receipe name'
            value={searchParam}
            onChange={(e)=>setSearchParam(e.target.value)}
            type="text" />
        </form>
    </div>
  )
}

export default SearchBox
