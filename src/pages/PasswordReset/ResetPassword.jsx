import { Alert, AlertIcon, Box, Container, useToast } from '@chakra-ui/react'
import { useState } from 'react'
import ResetPasswordForm from '../../components/Forms/ResetPasswordForm.jsx'
import { resetPassword } from '../../api/authApi.js'
import { useTranslation } from 'react-i18next'

const ResetPassword = () => {
  const [error, setError] = useState('')
  const { t } = useTranslation()
  const toast = useToast()

  const handleResetPassword = async (data) => {
    console.log('from handleee')
    console.log(data)
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
    } catch (error) {
      console.log(error)
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