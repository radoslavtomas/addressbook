import ForgotPasswordForm from '../../components/Forms/ForgotPasswordForm.jsx'
import { Alert, AlertIcon, Box, Container, useToast } from '@chakra-ui/react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { forgotPassword } from '../../api/authApi.js'
import { useTranslation } from 'react-i18next'

const ForgotPassword = () => {
  const [error, setError] = useState('')
  const navigate = useNavigate()
  const toast = useToast()
  const { t } = useTranslation()
  const resetUrl = 'http://localhost:5137'

  const handleForgotPassword = async (data) => {
    console.log('YAYA')
    data['reset_url'] = resetUrl
    console.log(data)
    setError('')

    try {
      const response = await forgotPassword(data)

      if (!response.success) {
        setError(t('forgotPasswordForm.responseNoUser'))

        toast({
          description: t('forgotPasswordForm.responseError'),
          status: 'error',
          duration: 5000,
          isClosable: true,
        })

        return
      }

      toast({
        title: t('forgotPasswordForm.responseSuccessTitle'),
        description: t('forgotPasswordForm.responseSuccessMessage'),
        status: 'success',
        duration: 5000,
        isClosable: true,
      })

      // set up user in store
      // navigate(namedUrls.getUser, {
      //   state: {
      //     redirectTo: namedUrls.contacts
      //   }
      // })
    } catch (err) {
      console.log(err)
      setError(err.response.data.message)
      // setError(t('forgotPasswordForm.responseError'))
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

      <ForgotPasswordForm handleForgotPassword={handleForgotPassword}/>
    </Container>
  )
}

export default ForgotPassword