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
        path: namedUrls.profile,
        element: <Profile/>
      },
      {
        path: namedUrls.updatePassword,
        element: <UpdatePassword/>
      },
      {
        path: namedUrls.resetPassword,
        element: <PasswordReset/>
      },
      {
        path: namedUrls.contacts,
        element: <Contacts/>
      },
      {
        path: namedUrls.contactsCreate,
        element: <ContactsCreate/>
      },
      {
        path: namedUrls.contactsEdit,
        element: <ContactsEdit/>
      },
      {
        path: namedUrls.addressCreate,
        element: <AddressCreate/>
      },
      {
        path: namedUrls.addressEdit,
        element: <AddressEdit/>
      }
    ]
  },
]

export default routes