import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addComments } from './redux/commentslice'

const CommentForm = () => {
    const [userComment,setUserComment] = useState('')

    const ChangeHandler =(e)=>{
        setUserComment(e.target.value)
    }

    const dispatch = useDispatch()
    const onsubmitHandler = (e)=>{
        e.preventDefault()
        dispatch(addComments(userComment))
        setUserComment('')
    }
  return (
    <div>
        
    <div className="max-w-md mx-auto bg-white p-2 rounded-xl shadow-md mt-6">
  <h2 className="text-2xl font-semibold mb-4 text-gray-800 text-center">
    Leave your comment
  </h2>

  <form className="flex flex-col gap-4" onSubmit={onsubmitHandler}>
    <textarea
      placeholder="Write your comment..."
      className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none shadow-2xl h-32"
      value={userComment}
      onChange={ChangeHandler}
    ></textarea>

    <button
      type="submit"
      className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
    >
      Submit
    </button>
  </form>
</div>

    </div>
  )
}

export default CommentForm
