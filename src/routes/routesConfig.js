export const namedUrls = {
  home: '/',
  login: '/login',
  register: '/register',
  getUser: '/get-user',
  profile: '/profile',
  updatePassword: '/update-password',
  forgotPassword: '/forgot-password',
  resetPasswordToken: '/reset-password/:token',
  contacts: '/contacts',
  contactsCreate: '/contacts/create',
  contactsEdit: '/contacts/:contactId/edit',
  addressCreate: '/contacts/:contactId/address',
  addressEdit: '/contacts/:contactId/address/:addressId/edit'
}

export const resolveUrl = (url, params) => {
  for (const param in params) {
    url = url.replace(`:${param}`, params[param])
  }

  return url
}