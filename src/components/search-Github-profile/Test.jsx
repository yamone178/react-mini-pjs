import React, { useState } from 'react'
import { useEffect } from 'react'
import User from './User'

const Test = () => {
    const [userName, setUserName] = useState('')
    const [userData, setUserData] = useState([])
    const [loading, setLoading] = useState(null)
    const [Error, setError] = useState(null)

    async function fetchGithubUsers(){
        try {
            setLoading(true)
            const data = await fetch(`https://api.github.com/users/${userName}`)
            const result = await data.json()

            if (result) {
                setUserData(result)
                setLoading(false)
            }
        } catch (error) {
            setError(error.message)
            setLoading(false)
        }
    }

    const handleSearch = () =>{
        fetchGithubUsers()
    }
console.log(userData);
    useEffect(()=>{
        fetchGithubUsers()
    }, [])
  return (
    <div>
      <input type="text"
      name='search-box'
      placeholder='search'
      onChange={(event)=> setUserName(event.target.value)}
      value={userName}
      className='w-[200px] h-[40px] bg-gray-200 border-gray-400 m-5 p-2'
       />

       <button onClick={handleSearch}
       className='bg-black w-[100px] h-40px p-2 text-white'>Search</button>

       <div>

       {
        userData !== null? <User user={userData} /> : null
       } 

       </div>
    </div>
  )
}

export default Test
