export const passwordResetUrl =
  process.env.NODE_ENV === 'production'
    ? 'https://bearaddress.com'
    : 'http://localhost:5173'

export const baseApiUrl =
  process.env.NODE_ENV === 'production'
    ? 'https://snomapi.rdslv.com'
    : 'http://localhost:8000'
