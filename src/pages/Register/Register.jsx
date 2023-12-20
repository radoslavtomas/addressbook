import RegisterForm from '../../components/Forms/RegisterForm.jsx'
import { Container } from '@chakra-ui/react'
import { register } from '../../api/authApi.js'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { namedUrls } from '../../routes/routesConfig.js'
import { clearAppError, setAppError } from '../../store/errorSlice.js'
import { useDispatch } from 'react-redux'

const Register = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleRegistration = async (values) => {
    dispatch(clearAppError())

    try {
      await register(values)
      navigate(namedUrls.login)
    } catch (error) {
      dispatch(setAppError({
        code: error.code,
        errorMessage: error.response.status === 422
          ? error.response.data.message
          : t('errors.login')
      }))
    }
  }

  return (
    <Container maxW="container.md" pt={10}>
      <RegisterForm handleRegistration={handleRegistration}/>
    </Container>
  )
}

export default Register