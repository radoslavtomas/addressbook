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
  addressEdit: 'address/:addressId/edit'
}

export const resolveUrl = (url, params) => {
  console.log('resolv uRL method')
  console.log(url)
  console.log(params)

  for (const param in params) {
    const strToReplace = `:${param}`
    url = url.replace(strToReplace, params[param])
    console.log('url in loop', url)
  }

  return url
}