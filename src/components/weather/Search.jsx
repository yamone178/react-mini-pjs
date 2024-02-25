import React from 'react'

const Search = ({search, setSearch, handleSearch}) => {
  return (
    <div>
        <input type="text"
        placeholder='Search City Name'
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
        className='w-[300px] p-2 border  bg-violet-200' />

        <button onClick={handleSearch}
        className='p-2 text-white bg-black rounded-lg w-[120px] ml-3'>Search</button>
    </div>
  )
}

export default Search