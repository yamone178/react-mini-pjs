import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const GlobalContext = createContext(null)

const GlobalState = ({ children }) => {
    const [searchParam, setSearchParam] = useState('')
    const [recipeDetails, setRecipeDetails] = useState(null)
    const [recipes, setRecipes] = useState([])
    const [favourites, setFavourites] = useState([])

    const navigate = useNavigate()

    const handleSearchSubmit = (e) => {
        e.preventDefault()
        setSearchParam(searchParam)
        fetchParam()
        console.log(searchParam);
        setSearchParam("")
        navigate('/')
    }

    const handleFavourite = (recipeDetails) => {

        let cpyFavouriteList = [...favourites]

        let index = cpyFavouriteList.findIndex((item) => item.id === recipeDetails.id)

        if (index === -1) {
            cpyFavouriteList.push(recipeDetails)
        } else {
            cpyFavouriteList.splice(index)
        }
        setFavourites(cpyFavouriteList)
        console.log(favourites);
    }

    async function fetchParam() {
        try {
            const data = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParam}`)
            const foodName = await data.json()
            console.log(foodName);
            if (foodName?.data?.recipes) {
                setRecipes(foodName?.data?.recipes)
            }
        } catch (error) {
            console.log(error.message);
        }
    }

    useEffect(() => {

    }, [searchParam])

    return (
        <GlobalContext.Provider 
        value={{ searchParam, 
        setSearchParam, handleSearchSubmit,
         recipes, setRecipes, favourites, 
         setFavourites, handleFavourite,
         recipeDetails, setRecipeDetails}} >
            {children}
        </GlobalContext.Provider>

    )

}

export default GlobalState
