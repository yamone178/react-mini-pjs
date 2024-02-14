import React, { useState } from 'react'
import data from './data'

const Accordion = () => {
    const [item, setItem] = useState(null);
    const [multiSelect, setMultiSelect] = useState([])
    const [enableSelect, setEnableSelect] = useState(false)

    const handleItem = (getCurrentId) =>{
        setItem(getCurrentId)
        console.log(item);
    }
 
    const hanldeMultipleItem = (getId) =>{
     let cpyMultiple = [...multiSelect];
     const findIndexOfCurrentId = cpyMultiple.indexOf(getId);
     console.log(findIndexOfCurrentId);

     findIndexOfCurrentId === -1 ? cpyMultiple.push(getId)
     : cpyMultiple.splice(findIndexOfCurrentId, 1)
        
     setMultiSelect(cpyMultiple)
    }

    const handleEnableMultiple = () =>{
        setEnableSelect(!enableSelect)

        setMultiSelect([])
        setItem(null)
    }

    console.log(multiSelect);
  return (
    <div className='flex flex-col  w-[800px] mx-auto mt-[100px] '>

        <button className='px-3 py-2 mb-5 bg-red-400 w-[200px]'
         onClick={handleEnableMultiple}>Enable Multi-selection</button>
        {
           data && data.length > 0 ?
           
            data.map((dataItem) => (
                <div key={dataItem.id} >
                    <div 
                    onClick={()=> enableSelect ? hanldeMultipleItem(dataItem.id) : handleItem(dataItem.id)  
                    } 
                    className=' h-[70px] flex justify-center items-center bg-red-400 mb-2'>
                    {dataItem.question}
                    </div>

                    <div >
                        {/* {
                          enableSelect === false &&   dataItem.id === item ?
                            <div>
                                {dataItem.answer}
                            </div>: ''
                         
                        }

                        {
                            enableSelect === true && multiSelect.indexOf(dataItem.id) ?
                            <div>
                                {dataItem.answer}
                            </div> : ''
                        } */}

                        {
                            enableSelect ? multiSelect.indexOf(dataItem.id) !== -1 &&
                            <div>   {dataItem.answer}  </div> :
                            item === dataItem.id && 
                            <div>
                                {dataItem.answer}
                            </div>
                        }
                    </div>
                </div>
                
                
                
            ))
           
           : <div>No data found</div>
        }
    </div>
  )
}

export default Accordion