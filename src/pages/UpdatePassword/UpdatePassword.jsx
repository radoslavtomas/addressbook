import UpdatePasswordForm from '../../components/Forms/UpdatePasswordForm.jsx'
import { Alert, AlertIcon, Box, Container, useToast } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { updatePassword } from '../../api/userApi.js'
import { namedUrls } from '../../routes/routesConfig.js'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

const UpdatePassword = () => {
  const toast = useToast()
  const { t } = useTranslation()
  const navigate = useNavigate()
  const [error, setError] = useState('')

  const handleUpdatePassword = async (data) => {
    setError('')

    try {
      const response = await updatePassword(data)
      console.log(response)

      if (!response.id) return

      toast({
        description: 'Your password has been successfully updated',
        status: 'success',
        duration: 5000,
        isClosable: true,
      })

      navigate(namedUrls.getUser, {
        state: {
          redirectTo: namedUrls.contacts
        }
      })
    } catch (error) {
      console.log(error)
      if (error.response.data.message === 'The password is incorrect.') {
        setError(t('updatePasswordForm.responseIncorrectPassword'))
      } else {
        setError(error.response.data.message)
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

      <UpdatePasswordForm handleUpdatePassword={handleUpdatePassword}/>
    </Container>
  )
}

export default UpdatePassword

