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
import PrivateRoute from '../components/PrivateRoute/PrivateRoute.jsx'
import GetUser from '../pages/GetUser/GetUser.jsx'

import { namedUrls } from './routesConfig.js'

const routes = [
  {
    path: namedUrls.home,
    element: <RootLayout/>,
    errorElement: <Error/>,
    children: [
      {
        path: namedUrls.home,
        element: <Welcome/>
      },
      {
        path: namedUrls.login,
        element: <Login/>
      },
      {
        path: namedUrls.register,
        element: <Register/>
      },
      {
        path: namedUrls.resetPassword,
        element: <PasswordReset/>
      },
      {
        path: namedUrls.getUser,
        element: <GetUser/>
      },
      {
        path: namedUrls.profile,
        element: <PrivateRoute><Profile/></PrivateRoute>
      },
      {
        path: namedUrls.updatePassword,
        element: <PrivateRoute><UpdatePassword/></PrivateRoute>
      },
      {
        path: namedUrls.contacts,
        element: <PrivateRoute><Contacts/></PrivateRoute>
      },
      {
        path: namedUrls.contactsCreate,
        element: <PrivateRoute><ContactsCreate/></PrivateRoute>
      },
      {
        path: namedUrls.contactsEdit,
        element: <PrivateRoute><ContactsEdit/></PrivateRoute>
      },
      {
        path: namedUrls.addressCreate,
        element: <PrivateRoute><AddressCreate/></PrivateRoute>
      },
      {
        path: namedUrls.addressEdit,
        element: <PrivateRoute><AddressEdit/></PrivateRoute>
      }
    ]
  },
]

export default routes