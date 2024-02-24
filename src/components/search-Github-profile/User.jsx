import React from 'react'

const User = ({user}) => {
    const {avatar_url, name, login, id, created_at, followers, following} = user
  return (
    <div>
        <img src={avatar_url} alt="" className='w-[200px] m-5'/>
      

    </div>
  )
}

export default User