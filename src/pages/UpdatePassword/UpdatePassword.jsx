import UpdatePasswordForm from '../../components/Forms/UpdatePasswordForm.jsx'
import { Container, useToast } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { updatePassword } from '../../api/userApi.js'
import { namedUrls } from '../../routes/routesConfig.js'

const UpdatePassword = () => {
  const toast = useToast()
  const navigate = useNavigate()

  const handleUpdatePassword = async (data) => {
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
    }
  }

  return (
    <Container maxW="container.md" pt={10}>
      <UpdatePasswordForm handleUpdatePassword={handleUpdatePassword}/>
    </Container>
  )
}

export default UpdatePassword

