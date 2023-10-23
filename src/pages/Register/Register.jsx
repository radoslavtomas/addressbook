import RegisterForm from '../../components/Forms/RegisterForm.jsx'
import { Alert, AlertIcon, Box, Container } from '@chakra-ui/react'
import { register } from '../../api/authApi.js'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

const Register = () => {
  const { t } = useTranslation()
  const [error, setError] = useState('')

  const handleRegistration = async (values) => {
    setError('')

    try {
      const response = await register(values)
      console.log(response)
      // redirect to /contacts page
    } catch (err) {
      console.log(err)
      if (err.response.status === 422) {
        setError(err.response.data.message)
      } else {
        setError(t('errors.registration'))
      }
    }
  }
  // const {
  //   isLoading,
  //   error,
  //   data
  // } = useSWR('/auth/register', register, {
  //   onSuccess: data => console.log(data)
  // })
  //
  // let content
  //
  // if (isLoading) {
  //   content = <p>Loading...</p>
  // }
  //
  // if (error) {
  //   content = <p>{error.message}</p>
  // }
  //
  // if (data) {
  //   content = <p>Registered</p>
  // }

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