import React, { useContext, useEffect } from 'react'
import { GlobalContext } from '../Context/GlobalState'
import { NavLink } from 'react-router-dom'
import RecipeItem from '../RecipeItem'

const Home = ({getCurrentId}) => {

    const { recipes, setRecipes} = useContext(GlobalContext)
    


  return (
    <div>
        {
            recipes && recipes.length >0 ? 
            <div className='grid grid-cols-4 gap-4'>
                {
                    recipes.map((recipe) => <RecipeItem key={recipe.id} recipe={recipe} />)
                }
            </div>
            :
             <div> <h2 className=' text-center text-[20px] font-bold'>No recipes to show</h2> </div>
        }
      
    </div>
  )
}

export default Home
