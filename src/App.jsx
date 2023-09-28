import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import routes from './routes/routes.jsx'
import '../i18n.js'

import './App.css'

// router and routes
const router = createBrowserRouter(routes)

function App () {
  return (
    <RouterProvider router={router}/>
  )
}

export default App
