import RootLayout from '../layouts/RootLayout.jsx'
import Error from '../pages/Error/Error.jsx'
import Login from '../pages/Login/Login.jsx'
import Register from '../pages/Register/Register.jsx'
import Welcome from '../pages/Welcome/Welcome.jsx'
import PasswordReset from '../pages/PasswordReset/PasswordReset.jsx'
import Contacts from '../pages/Contacts/Contacts.jsx'
import AddContact from '../pages/AddContact/AddContact.jsx'
import AddAddress from '../pages/AddAddress/AddAddress.jsx'
import Profile from '../pages/Profile/Profile.jsx'

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
      },
      {
        path: '/reset-password',
        element: <PasswordReset/>
      },
      {
        path: '/profile',
        element: <Profile/>
      },
      {
        path: '/contacts',
        element: <Contacts/>
      },
      {
        path: '/add-contact',
        element: <AddContact/>
      },
      {
        path: '/add-address',
        element: <AddAddress/>
      }
    ]
  },
]

export default routes