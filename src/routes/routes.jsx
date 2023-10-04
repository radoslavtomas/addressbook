import RootLayout from '../layouts/RootLayout.jsx'
import Error from '../pages/Error/Error.jsx'
import Login from '../pages/Login/Login.jsx'
import Register from '../pages/Register/Register.jsx'
import Welcome from '../pages/Welcome/Welcome.jsx'

const routes = [
  {
    path: '/',
    element: <RootLayout/>,
    errorElement: <Error/>,
    children: [
      {
        path: '/',
        element: <Welcome/>
      },
      {
        path: '/login',
        element: <Login/>
      },
      {
        path: '/register',
        element: <Register/>
      }
    ]
  },
]

export default routes