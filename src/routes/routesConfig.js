export const namedUrls = {
  home: '/',
  login: '/login',
  register: '/register',
  profile: '/profile',
  updatePassword: '/update-password',
  resetPassword: '/reset-password',
  contacts: '/contacts',
  contactsCreate: '/contacts-create',
  contactsEdit: '/contacts/:contactsId/edit',
  addressCreate: '/address-create',
  addressEdit: '/address/:addressId/edit'
}

export const resolveUrl = (url, params) => {
  for (const param in params) {
    url = url.replace(`:${param}`, params[param])
  }

  return url
}