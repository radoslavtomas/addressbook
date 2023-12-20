import ForgotPasswordForm from '../../components/Forms/ForgotPasswordForm.jsx'
import { Container, useToast } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { forgotPassword } from '../../api/authApi.js'
import { useTranslation } from 'react-i18next'
import { namedUrls } from '../../routes/routesConfig.js'
import { passwordResetUrl } from '../../config/config.js'
import { useDispatch } from 'react-redux'
import { clearAppError, setAppError } from '../../store/errorSlice.js'

const ForgotPassword = () => {
  const navigate = useNavigate()
  const toast = useToast()
  const { t } = useTranslation()
  const dispatch = useDispatch()

  const handleForgotPassword = async (data) => {
    data['reset_url'] = passwordResetUrl
    dispatch(clearAppError())

    try {
      const response = await forgotPassword(data)

      if (!response.success) {
        dispatch(setAppError({
          code: null,
          errorMessage: t('forgotPasswordForm.responseNoUser')
        }))
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
      dispatch(setAppError({
        code: error.code,
        errorMessage: t('forgotPasswordForm.responseError')
      }))
    }
  }
  return (
    <Container maxW="container.md" pt={10}>
      <ForgotPasswordForm handleForgotPassword={handleForgotPassword}/>
    </Container>
  )
}

export default ForgotPassword