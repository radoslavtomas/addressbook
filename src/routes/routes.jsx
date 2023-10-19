import RootLayout from '../layouts/RootLayout.jsx'
import Error from '../pages/Error/Error.jsx'
import Login from '../pages/Login/Login.jsx'
import Register from '../pages/Register/Register.jsx'
import Welcome from '../pages/Welcome/Welcome.jsx'
import PasswordReset from '../pages/PasswordReset/PasswordReset.jsx'
import Contacts from '../pages/Contacts/Contacts.jsx'
import ContactsCreate from '../pages/Contacts/ContactsCreate.jsx'
import AddressCreate from '../pages/Address/AddressCreate.jsx'
import Profile from '../pages/Profile/Profile.jsx'
import UpdatePassword from '../pages/UpdatePassword/UpdatePassword.jsx'
import ContactsEdit from '../pages/Contacts/ContactsEdit.jsx'
import AddressEdit from '../pages/Address/AddressEdit.jsx'

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
        path: '/profile',
        element: <Profile/>
      },
      {
        path: '/update-password',
        element: <UpdatePassword/>
      },
      {
        path: '/reset-password',
        element: <PasswordReset/>
      },
      {
        path: '/contacts',
        element: <Contacts/>
      },
      {
        path: '/contacts/create',
        element: <ContactsCreate/>
      },
      {
        path: '/contacts/:contactId/edit',
        element: <ContactsEdit/>
      },
      {
        path: '/address/create',
        element: <AddressCreate/>
      },
      {
        path: '/address/:addressId/edit',
        element: <AddressEdit/>
      }
    ]
  },
]

export default routes