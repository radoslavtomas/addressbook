import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  error: null
}

export const errorSlice = createSlice({
  name: 'error',
  initialState,
  reducers: {
    setAppError: (state, action) => {
      const { code, errorMessage } = action.payload

      if (code === 'ERR_NETWORK') {
        state.error = 'ERR_NETWORK'
        return
      }

      state.error = errorMessage
    },
    clearAppError: (state) => {
      state.error = null
    }
  }
})

export const {
  setAppError,
  clearAppError
} = errorSlice.actions

export default errorSlice.reducer