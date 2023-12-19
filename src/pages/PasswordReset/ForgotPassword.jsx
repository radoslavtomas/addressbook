import ForgotPasswordForm from '../../components/Forms/ForgotPasswordForm.jsx'
import { Alert, AlertIcon, Box, Container, useToast } from '@chakra-ui/react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { forgotPassword } from '../../api/authApi.js'
import { useTranslation } from 'react-i18next'
import { namedUrls } from '../../routes/routesConfig.js'
import { passwordResetUrl } from '../../config/config.js'

const ForgotPassword = () => {
  const [error, setError] = useState('')
  const navigate = useNavigate()
  const toast = useToast()
  const { t } = useTranslation()

  const handleForgotPassword = async (data) => {
    data['reset_url'] = passwordResetUrl
    setError('')

    try {
      const response = await forgotPassword(data)

      if (!response.success) {
        setError(t('forgotPasswordForm.responseNoUser'))
        return
      }

      toast({
        title: t('forgotPasswordForm.responseSuccessTitle'),
        description: t('forgotPasswordForm.responseSuccessMessage'),
        status: 'success',
        duration: 5000,
        isClosable: true,
      })

      navigate(namedUrls.login)
    } catch (error) {
      if (error.code === 'ERR_NETWORK') {
        setError(t('errors.noConnection'))
        return
      }

      // setError(error.response.data.message)
      setError(t('forgotPasswordForm.responseError'))
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