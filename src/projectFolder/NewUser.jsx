import React from 'react'
import { useSelector } from 'react-redux'


const NewUser = () => {
    const newUser = useSelector((state)=>state.newSubcriber.users)
  return (
    <div className='h-[200px]'>
        subcrier:
        {
            newUser.map((item,index)=>{
                return(
                    <div key={index}>
                        <h1>{item}</h1>
                    </div>
                )
            })
        }
    
    </div>
  )
}

export default NewUser
