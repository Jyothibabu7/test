import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../projectFolder/redux/counterSlice'
import userReducer from '../projectFolder/redux/userSlice'
import commentReducer from '../projectFolder/redux/commentslice'

 export const store = configureStore({
    reducer:{
      counter: counterReducer,
      newSubcriber:userReducer,
      newComment:commentReducer,
    }
})