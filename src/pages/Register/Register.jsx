import RegisterForm from '../../components/Forms/RegisterForm.jsx'
import { Alert, AlertIcon, Box, Container } from '@chakra-ui/react'
import { register } from '../../api/authApi.js'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { namedUrls } from '../../routes/routesConfig.js'

const Register = () => {
  const [error, setError] = useState('')
  const { t } = useTranslation()
  const navigate = useNavigate()

  const handleRegistration = async (values) => {
    setError('')

    try {
      await register(values)
      navigate(namedUrls.login)
    } catch (error) {
      // console.log(error)
      if (error.code === 'ERR_NETWORK') {
        setError(t('errors.noConnection'))
        return
      }

      if (error.response.status === 422) {
        setError(error.response.data.message)
      } else {
        setError(t('errors.registration'))
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

      <RegisterForm handleRegistration={handleRegistration}/>
    </Container>
  )
}

export default Register