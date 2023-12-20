import UpdatePasswordForm from '../../components/Forms/UpdatePasswordForm.jsx'
import { Container, useToast } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { updatePassword } from '../../api/userApi.js'
import { namedUrls } from '../../routes/routesConfig.js'
import { useDispatch } from 'react-redux'
import { clearAppError, setAppError } from '../../store/errorSlice.js'
import { useTranslation } from 'react-i18next'

const UpdatePassword = () => {
  const toast = useToast()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { t } = useTranslation()

  const handleUpdatePassword = async (data) => {
    dispatch(clearAppError())

    try {
      const response = await updatePassword(data)

      // failed response will be caught by catch block anyway
      if (!response.id) return

      toast({
        description: t('toasts.passwordUpdated'),
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
      dispatch(setAppError({
        code: error.code,
        errorMessage: error.response.data.message
      }))
    }
  }

  return (
    <Container maxW="container.md" pt={10}>
      <UpdatePasswordForm handleUpdatePassword={handleUpdatePassword}/>
    </Container>
  )
}

export default UpdatePassword

