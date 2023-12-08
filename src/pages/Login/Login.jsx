import LoginForm from '../../components/Forms/LoginForm.jsx'
import { Alert, AlertIcon, Box, Container } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import { useState } from 'react'
import { getCsrfCookie, login } from '../../api/authApi.js'
import { useNavigate } from 'react-router-dom'
import { namedUrls } from '../../routes/routesConfig.js'

const Login = () => {
  const { t } = useTranslation()
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleLogin = async (values) => {
    setError('')

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
      // console.log(error)
      if (error.code === 'ERR_NETWORK') {
        setError(t('errors.noConnection'))
      } else {
        // console.log(error)
        setError(t('errors.login'))
      }
    }
  }
  return (
    <Container maxW="container.md" pt={10}>
      {error && <Box maxW="350px" mx="auto">
        <Alert mb={6} borderRadius={4} status="error">
          <AlertIcon/>
          {error}
        </Alert>
      </Box>}

      <LoginForm handleLogin={handleLogin}/>
    </Container>
  )
}

export default Login