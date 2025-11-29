import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addUsers } from './redux/userSlice'


const UserForm = () => {

    const [userName,setUserName] = useState('')
    const dispatch = useDispatch()
    
    const changeHandler = (e)=>{
        setUserName(e.target.value)
    }
    const OnSubmitHandler =(e)=>{
        e.preventDefault()
        dispatch(addUsers(userName))
        setUserName('')

    }
  return (
    <div>
   <div className="max-w-sm mx-auto mt-5 bg-white p-3 rounded-xl shadow-lg text-center">
  <form className="flex flex-col gap-4" onSubmit={OnSubmitHandler}>
    <h1 className="text-xl font-semibold text-gray-800 text-center">
      User Name
    </h1>

    <input
      type="text"
      placeholder="Enter your name"
      className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
      value={userName}
    onChange={changeHandler}
    />

    <button
      type="submit"
      className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-2 rounded-lg transition duration-300"
    >
      Submit
    </button>
  </form>
</div>


    </div>
  )
}

export default UserForm
