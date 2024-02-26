import React from 'react'
import Navbar from './Navbar'
import { Route, Router, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Details from './pages/Details'
import Favourites from './pages/Favourites'

const FoodReceipe = () => {
  return (
    <div>
        <div className="m-5">
          <Navbar />
        </div>

        <Routes>
            <Route path={'/'} element={<Home />} />
            <Route path={'/details/:id'} element={<Details />} />
            <Route path={'/favourites'} element={<Favourites />} />
            
        </Routes>
        


      
    </div>
  )
}

export default FoodReceipe
