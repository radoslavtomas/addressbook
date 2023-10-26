import { Navigate } from 'react-router-dom'
import { namedUrls } from '../../routes/routesConfig.js'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import { logUserIn } from '../../store/userSlice.js'

const PrivateRoute = ({ children }) => {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user.user)

  let isAuthenticated = false

  const handleAuthentication = () => {
    if (user) {
      isAuthenticated = true
      return
    }

    if (!user && hasValidXsrfCookie()) {
      const userCache = sessionStorage.getItem('user')

      if (userCache) {
        dispatch(logUserIn(JSON.parse(userCache)))
        isAuthenticated = true
      }
    }
  }

  const parseCookie = (str) => {
    return str
      .split(';')
      .map(v => v.split('='))
      .reduce((acc, v) => {
        acc[decodeURIComponent(v[0].trim())] = decodeURIComponent(v[1].trim())
        return acc
      }, {})
  }

  const hasValidXsrfCookie = () => {
    const cookie = document.cookie

    if (!cookie) return false

    const parsed = parseCookie(cookie)

    return 'XSRF-TOKEN' in parsed
  }

  handleAuthentication()

  return isAuthenticated ? children : <Navigate to={namedUrls.login}/>
}

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired
}

export default PrivateRoute