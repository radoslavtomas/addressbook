import { configureStore } from '@reduxjs/toolkit'
import userReducer from './userSlice.js'
import errorReducer from './errorSlice.js'

export const store = configureStore({
  reducer: {
    user: userReducer,
    error: errorReducer
  },
})