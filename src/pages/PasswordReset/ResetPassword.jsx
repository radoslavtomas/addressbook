import { Alert, AlertIcon, Box, Container, useToast } from '@chakra-ui/react'
import { useState } from 'react'
import ResetPasswordForm from '../../components/Forms/ResetPasswordForm.jsx'
import { resetPassword } from '../../api/authApi.js'
import { useTranslation } from 'react-i18next'
import { namedUrls } from '../../routes/routesConfig.js'
import { useNavigate } from 'react-router-dom'

const ResetPassword = () => {
  const [error, setError] = useState('')
  const { t } = useTranslation()
  const toast = useToast()
  const navigate = useNavigate()

  const handleResetPassword = async (data) => {
    setError('')

    try {
      const response = await resetPassword(data)

      if (!response.success) {
        setError(t(`resetPasswordForm.${response.message}`))
        return
      }

      toast({
        title: t('resetPasswordForm.responseSuccessTitle'),
        description: t('resetPasswordForm.responseSuccessMessage'),
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

      setError(error.response.data.message)
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

      <ResetPasswordForm handleResetPassword={handleResetPassword}/>
    </Container>
  )
}

export default ResetPassword