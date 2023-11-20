import PasswordResetForm from '../../components/Forms/PasswordResetForm.jsx'
import { Alert, AlertIcon, Box, Container, useToast } from '@chakra-ui/react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { resetPassword } from '../../api/authApi.js'
import { useTranslation } from 'react-i18next'

const PasswordReset = () => {
  const [error, setError] = useState('')
  const navigate = useNavigate()
  const toast = useToast()
  const { t } = useTranslation()
  const resetUrl = 'http://localhost:5137'

  const handlePasswordReset = async (data) => {
    console.log('YAYA')
    data['reset_url'] = resetUrl
    console.log(data)
    setError('')

    try {
      const response = await resetPassword(data)

      if (!response.success) {
        setError(t('resetPasswordForm.responseNoUser'))

        toast({
          description: t('resetPasswordForm.responseError'),
          status: 'error',
          duration: 5000,
          isClosable: true,
        })

        return
      }

      toast({
        title: t('resetPasswordForm.responseSuccessTitle'),
        description: t('resetPasswordForm.responseSuccessMessage'),
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
      // setError(t('resetPasswordForm.responseError'))
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

      <PasswordResetForm handlePasswordReset={handlePasswordReset}/>
    </Container>
  )
}

export default PasswordReset