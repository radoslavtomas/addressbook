import ContactForm from '../../components/Forms/ContactForm.jsx'
import { Container, useToast } from '@chakra-ui/react'
import { storeContact } from '../../api/contactApi.js'
import { useNavigate } from 'react-router-dom'
import { namedUrls } from '../../routes/routesConfig.js'
import { useDispatch } from 'react-redux'
import { clearAppError, setAppError } from '../../store/errorSlice.js'
import { useTranslation } from 'react-i18next'

const ContactsCreate = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const toast = useToast()
  const { t } = useTranslation()

  const handleContactStore = async (data) => {
    dispatch(clearAppError())

    try {
      await storeContact(data)

      toast({
        description: t('toasts.contactCreated'),
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
    <Container maxW="container.md" py={10}>
      <ContactForm mode="create" handleFormSubmit={handleContactStore}/>
    </Container>
  )
}

export default ContactsCreate