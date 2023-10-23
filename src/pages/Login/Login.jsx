import LoginForm from '../../components/Forms/LoginForm.jsx'
import { Alert, AlertIcon, Box, Container } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import { useState } from 'react'
import { getCsrfCookie, getUser, login } from '../../api/authApi.js'

const Login = () => {
  const { t } = useTranslation()
  const [error, setError] = useState('')

  const handleLogin = async (values) => {
    setError('')

    try {
      // set CSRF cookie
      await getCsrfCookie()

      // do login
      const response = await login(values)
      console.log(response)

      const user = await getUser()
      console.log(user)

      // TODO: redirect to /contacts page
    } catch (err) {
      console.log(err)
      console.log(t('errors.login'))
      setError(err.response.data.message)
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