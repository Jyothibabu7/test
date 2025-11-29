import React from 'react'

import { useSelector } from 'react-redux'

const NewComments = () => {
    const NewCommet = useSelector((state)=>state.newComment.comments)
  return (
    <div className=''>
        Comments:
        {
            NewCommet.map((item,index)=>{
                return(
                    <div key={index}>
                            <h2>{item}</h2>
                    </div>
                )
            })
        }
      
     </div>
  )
}

export default NewComments
