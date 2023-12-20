import { Container, useToast } from '@chakra-ui/react'
import ResetPasswordForm from '../../components/Forms/ResetPasswordForm.jsx'
import { resetPassword } from '../../api/authApi.js'
import { useTranslation } from 'react-i18next'
import { namedUrls } from '../../routes/routesConfig.js'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { clearAppError, setAppError } from '../../store/errorSlice.js'

const ResetPassword = () => {
  const { t } = useTranslation()
  const toast = useToast()
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleResetPassword = async (data) => {
    dispatch(clearAppError())

    try {
      const response = await resetPassword(data)

      if (!response.success) {
        dispatch(setAppError({
          code: null,
          errorMessage: t(`resetPasswordForm.${response.message}`)
        }))
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
      dispatch(setAppError({
        code: error.code,
        errorMessage: error.response.data.message
      }))
    }
  }

  return (
    <Container maxW="container.md" pt={10}>
      <ResetPasswordForm handleResetPassword={handleResetPassword}/>
    </Container>
  )
}

export default ResetPassword