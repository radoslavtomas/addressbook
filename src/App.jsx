import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import routes from './routes/routes.jsx'
import '../i18n.js'
import * as Yup from 'yup'
import './App.css'

// enhance Yup email validation method
const emailRegex = /^([a-zA-Z0-9_\-\.\+]+)@((\[[0-2]{1}[0-5]{1}[0-5]{1}\.[0-2]{1}[0-5]{1}[0-5]{1}\.[0-2]{1}[0-5]{1}[0-5]{1}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-2]{1}[0-5]{1}[0-5]{1})(\]?)$/i

Yup.addMethod(Yup.string, 'email', function validateEmail (message) {
  return this.matches(emailRegex, {
    message,
    name: 'email',
    excludeEmptyString: true,
  })
})

// router and routes
const router = createBrowserRouter(routes)

function App () {
  return (
    <RouterProvider router={router}/>
  )
}

export default App
