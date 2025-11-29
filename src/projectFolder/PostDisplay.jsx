import React, { useState } from 'react'
import NewComments from './NewComments'
import NewUser from './NewUser'
import CommentForm from './CommentForm'
import UserForm from './UserForm'
import { useDispatch } from 'react-redux'
import { increment } from './redux/counterSlice'

const PostDisplay = () => {
    const [showUser,setShowUser] = useState(false);
    const [showComment,setShowComment] =useState(false);

    const dispatch = useDispatch()

    const likeHandler =(e)=>{
        dispatch(increment())
    }

    const userHandle=(e)=>{
        setShowUser(true)
    }

    const commentHandler=(e)=>{
        setShowComment(true)
    }
  return (

    <>

     <div className='mt-3 flex justify-around'>
            <div className=''>
            { showComment && <CommentForm/>} 
              { showUser &&  <UserForm/>}
                </div>


      
        <div>
             <img src="https://static.vecteezy.com/vite/assets/photo-masthead-375-BoK_p8LG.webp" alt=""  className="rounded object-cover mx-auto h-[300px] w-[400px]"/>
               <div className='flex justify-center gap-3 mt-2 '>
            <button className='border p-2 rounded-lg bg-amber-300 hover:bg-blue-300'onClick={userHandle}>Subcsribe</button>
            <button className='border p-2 rounded-lg bg-amber-300 hover:bg-blue-300' onClick={commentHandler}>Comment</button>
            <button className='border p-2 rounded-lg bg-amber-300 hover:bg-blue-300' onClick={likeHandler}>Like</button>
    </div>

        </div>
        
        
        <div className='border w-3xs p-2'>
            <NewUser/>
             <NewComments/>
        </div>

    </div>
  
    </>
   
  )
}

export default PostDisplay


