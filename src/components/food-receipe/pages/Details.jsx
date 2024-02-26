import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { GlobalContext } from '../Context/GlobalState'

const Details = () => {


  const { favourites, setFavourites, handleFavourite, recipeDetails, setRecipeDetails} = useContext(GlobalContext)

    const {id} = useParams()

    console.log(recipeDetails);

    async function getReceipeDetails(){
     const data = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${id}`)
     const details = await data.json()
      console.log(details);

      if (details?.data) {
        setRecipeDetails(details?.data)
      }
    }

    useEffect(()=>{
      getReceipeDetails()
      console.log(favourites);
    },[])
    

  return (
    <div>
      <div className="flex justify-center gap-[50px]">
        <div className="">
          <img src={recipeDetails?.recipe?.image_url} className='w-[700px]' alt="" />
        </div>

        <div className="">

          <button onClick={()=>handleFavourite(recipeDetails?.recipe)}
          className='p-2 text-white bg-black rounded-lg'>
            {
              favourites.length >0 && favourites.findIndex((fav)=> fav.id === recipeDetails.recipe.id) !== -1 ?
              'Remove from favourite' : 'Add to Favourite'
            }
            </button>

          <h2 className='my-5 text-xl font-bold'>Ingredients</h2>
          <ul>
            {
              recipeDetails?.recipe?.ingredients.map((ind,index)=><li key={`details${index}`}>
                {ind.description}
              </li>)
            }
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Details
