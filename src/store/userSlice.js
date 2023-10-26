import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: null
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logUserIn: (state, action) => {
      state.user = action.payload
    },
    logUserOut: state => {
      state.user = null
    }
  }
})

export const { logUserIn, logUserOut } = userSlice.actions

export default userSlice.reducer