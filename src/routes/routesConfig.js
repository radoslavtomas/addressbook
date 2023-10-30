export const namedUrls = {
  home: '/',
  login: '/login',
  register: '/register',
  getUser: '/get-user',
  profile: '/profile',
  updatePassword: '/update-password',
  resetPassword: '/reset-password',
  contacts: '/contacts',
  contactsCreate: '/contacts-create',
  contactsEdit: '/contacts/:contactId/edit',
  addressCreate: '/address-create',
  addressEdit: '/address/:addressId/edit'
}

export const resolveUrl = (url, params) => {
  for (const param in params) {
    url = url.replace(`:${param}`, params[param])
  }

  return url
}