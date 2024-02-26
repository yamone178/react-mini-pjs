import React from 'react'
import { NavLink } from 'react-router-dom'

const RecipeItem = ({recipe}) => {

    console.log(recipe)
  return (
    <div
                    className='p-3 border rounded-md shadow-lg'
                     key={recipe?.id}>

                        <div className=' w-[300px] h-[200px] mx-auto'>
                            <img src={recipe?.image_url} className='object-cover w-full h-full rounded-md' alt="" />
                        </div>

                        <h4 className='mt-3 text-blue-950'>{recipe?.title}</h4>

                        <NavLink to={`/details/${recipe?.id}`} className='inline-block p-2 mt-3 text-white bg-black rounded-md '>See details</NavLink>
                        
                    </div>
  )
}

export default RecipeItem
