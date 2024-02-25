import React, { useEffect, useState } from 'react'
import Search from './Search'

const Weather = () => {
    const [search, setSearch] = useState('')
    const [loading, setLoading] = useState(null)
    const [weatherData, setWeatherData] = useState(null)
    const [error, setError] = useState(null)
    
    const handleSearch = () =>{
        setSearch(search)
        fetchWeatherData(search)
    }

    console.log(search);


    async function fetchWeatherData(cityname){
        try {
            
            const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=b99ea38aeb839430fb80bb8ad9537a33`)
            const res = await data.json()

            if (res) {
                setWeatherData(res)
                console.log(res);
            }

        } catch (error) {
            setError(error)
        }
    }

    useEffect(()=>{
       fetchWeatherData('yangon') 
    }, [])
  
  if (loading) {
    return <div>Loading ....</div>
  }

  if(error){
    return <div>Something wrong - {error}</div>
  }
  return (
    <div className='w-[700px] mx-auto mt-5 bg-violet-50'>
        <Search search={search} setSearch={setSearch} handleSearch={handleSearch} />

        <div className="p-5 ">
            <h2>City Name  - {weatherData ? weatherData?.name : ''}</h2>
            <p>Description - {weatherData && weatherData.weather && weatherData.weather[0]
              ? weatherData.weather[0].description
              : "" }</p>
        </div>
        
       
        
    </div>
  )
}

export default Weather