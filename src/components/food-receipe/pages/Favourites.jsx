import React, { useContext } from 'react'
import { GlobalContext } from '../Context/GlobalState'
import { NavLink } from 'react-router-dom'
import RecipeItem from '../RecipeItem'

const Favourites = () => {
  const {favourites} = useContext(GlobalContext)

  console.log(favourites);
  return (
    <div >
      {
        favourites && favourites.length >0 ?
        <div className='grid grid-cols-4 gap-4'>
             { favourites.map((fav) => <RecipeItem key={fav.id} recipe={fav}/> )}
        </div>
         : <h2 className='block text-xl font-bold text-center'> You don't have any favourite recipes !</h2>
      }
    </div>
  )
}

export default Favourites
