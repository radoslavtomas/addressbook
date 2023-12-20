import LoginForm from '../../components/Forms/LoginForm.jsx'
import { Container } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import { getCsrfCookie, login } from '../../api/authApi.js'
import { useNavigate } from 'react-router-dom'
import { namedUrls } from '../../routes/routesConfig.js'
import { useDispatch } from 'react-redux'
import { clearAppError, setAppError } from '../../store/errorSlice.js'

const Login = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleLogin = async (values) => {
    dispatch(clearAppError())

    try {
      // set CSRF cookie
      await getCsrfCookie()

      // do the login on the server
      await login(values)

      // set up user in store
      navigate(namedUrls.getUser, {
        state: {
          redirectTo: namedUrls.contacts
        }
      })
    } catch (error) {
      dispatch(setAppError({
        code: error.code,
        errorMessage: t('errors.login')
      }))
    }
  }
  return (
    <Container maxW="container.md" pt={10}>
      <LoginForm handleLogin={handleLogin}/>
    </Container>
  )
}

export default Login