import React, { useState } from 'react'
import { useEffect } from 'react'
import {FaChevronLeft} from 'react-icons/fa'
import {FaChevronRight} from 'react-icons/fa'

const ImageSlider = ( {url, page, limit}) => {

    const [images, setImages] = useState([])
    const [currentSlide, setCurrentSlide] = useState(0)
    const [errMsg, setErrMsg] = useState(null)
    const [loading, setLoading] = useState(null)

    async function fetchImages(getUrl){
        try {
            
            setLoading(true)
            const response= await fetch(`${getUrl}?page=${page}&limit=${limit}`)
            const data = await response.json()

            if (data) {
                
                setImages(data)
                setLoading(false)
            }

        } catch (error) {
            setLoading(false)
            setErrMsg(error.message)
        }
    }

    const handlePrevious = () =>{
      currentSlide === 0 ? setCurrentSlide(images.length -1) : setCurrentSlide(currentSlide - 1);
    }

    const handleNext = () =>{
      currentSlide === images.length -1? setCurrentSlide(0) : setCurrentSlide(currentSlide + 1);
    }

    const handleSlide = () => {
      
    }

  

    useEffect(() => {
        if (url !== "") fetchImages(url);
      }, [url]);
    

    if (errMsg !==null) {
        return <div>Error occurred ! `${errMsg}`</div>
    }

    if (loading === true) {
        return <div className=' text-[30px]'>Loading...</div>
    }

    console.log(images);

  return (
    <div className='w-[100%] relative mx-auto'>
     <h2 className='text-[30px] mb-5 flex justify-center'>Image Slider</h2>
      <div className='relative w-[700px] h-[450px] mx-auto'>
      <FaChevronLeft
      onClick={handlePrevious}
       className=' text-[40px] bg-white rounded-full p-2 m-5 absolute left-0 cursor-pointer top-[50%] ' />
     {
      images && images.length >0 ? 
      images.map((img, index)=> 
        <img 
        key={img.id}
        className={ currentSlide !== index ? 'hidden' : 'w-full h-full'}
        src={img.download_url} 
        alt={img.download_url} />
      )
      :''
     }

     <FaChevronRight onClick={handleNext}
     className=' text-[40px] bg-white rounded-full m-5 p-2 absolute right-0 cursor-pointer top-[50%]' />

   
      </div>

      <div className='absolute bottom-0 flex justify-center gap-1 right-[50%]'>
     {
    
      images && images.length >0 ? 
      images.map((img, index)=> <div onClick={() => setCurrentSlide(index)}
       className=' cursor-pointer w-[16px] h-[16px] bg-white rounded-[50%] outline-none '> </div>)
      :''
     }
     </div>
    
    </div>
  )
}

export default ImageSlider
