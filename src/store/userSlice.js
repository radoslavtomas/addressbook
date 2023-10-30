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
    },
    setUpUser: (state, action) => {
      sortContacts(action.payload.contacts)
      state.user = action.payload
    },
  }
})

const sortContacts = contacts => {
  if (!contacts.length) return

  return contacts.sort((a, b) => {
    const nameA = a.last_name.toLowerCase() // ignore upper and lowercase
    const nameB = b.last_name.toLowerCase() // ignore upper and lowercase
    if (nameA < nameB) {
      return -1
    }
    if (nameA > nameB) {
      return 1
    }

    // names must be equal
    return 0
  })
}

export const { logUserIn, logUserOut, setUpUser } = userSlice.actions

export default userSlice.reducer