import React from 'react'
import { useSelector } from 'react-redux'


const Navbar = () => {
    const updatedlikes = useSelector((state)=>state.counter.value)
    const updatedCommets = useSelector((state)=>state.newComment.comments)
    const updatedUsers = useSelector((state)=>state.newSubcriber.users)

  return (
    <div className='flex items-center justify-around bg-gray-100 p-4 shadow-md'>
      <h1 className='text-xl font-bold'>Redux</h1>
      <h2 className='text-lg'>Subscribers:{updatedUsers.length}</h2>
      <h1 className='text-lg'>Comments:{updatedCommets.length}</h1>
      <h1 className='text-lg'>Likes:{updatedlikes}</h1>
    </div>    

  
  )
}

export default Navbar
