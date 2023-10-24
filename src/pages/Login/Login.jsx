import LoginForm from '../../components/Forms/LoginForm.jsx'
import { Alert, AlertIcon, Box, Container } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import { useState } from 'react'
import { getCsrfCookie, getUser, login } from '../../api/authApi.js'
import { logUserIn } from '../../store/userSlice.js'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const { t } = useTranslation()
  const [error, setError] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogin = async (values) => {
    setError('')

    try {
      await getCsrfCookie() // set CSRF cookie

      await login(values) // do login

      const user = await getUser() // get authenticated user
      console.log(user)

      dispatch(logUserIn(user)) // set user in store

      navigate('/contacts')
    } catch (err) {
      console.log(err)
      // setError(err.response.data.message)
      setError(t('errors.login'))
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