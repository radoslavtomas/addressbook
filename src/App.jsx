import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Error from './pages/Error/Error.jsx'
import Login from './pages/Login/Login.jsx'
import Register from './pages/Register/Register.jsx'
import Welcome from './pages/Welcome/Welcome.jsx'

import '../i18n.js'

import './App.css'

// router and routes
const router = createBrowserRouter([
  {
    path: '/',
    element: <Welcome/>,
    errorElement: <Error/>
  },
  {
    path: '/login',
    element: <Login/>
  },
  {
    path: '/register',
    element: <Register/>
  }
])

function App () {
  return (
    <RouterProvider router={router}/>
  )
}

export default App
