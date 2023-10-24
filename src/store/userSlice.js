import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: null,
  isLogged: false
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logUserIn: (state, action) => {
      state.user = action.payload
      state.isLogged = true
    },
    logUserOut: state => {
      state.user = null
      state.isLogged = false
    }
  }
})

export const { logUserIn, logUserOut } = userSlice.actions

export default userSlice.reducer