import ContactForm from '../../components/Forms/ContactForm.jsx'
import { Alert, AlertIcon, Box, Container } from '@chakra-ui/react'
import { storeContact } from '../../api/contactApi.js'
import { useNavigate } from 'react-router-dom'
import { namedUrls } from '../../routes/routesConfig.js'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

const ContactsCreate = () => {
  const [error, setError] = useState('')
  const { t } = useTranslation()
  const navigate = useNavigate()

  const handleContactStore = async (data) => {
    setError('')

    try {
      await storeContact(data)

      navigate(namedUrls.getUser, {
        state: {
          redirectTo: namedUrls.contacts
        }
      })
    } catch (error) {
      if (error.code === 'ERR_NETWORK') {
        setError(t('errors.noConnection'))
        return
      }

      setError(error.response.data.message)
    }
  }

  return (
    <Container maxW="container.md" py={10}>
      {error && <Box maxW="350px" mx="auto">
        <Alert mb={6} borderRadius={4} status="error">
          <AlertIcon/>
          {error}
        </Alert>
      </Box>}

      <ContactForm mode="create" handleFormSubmit={handleContactStore}/>
    </Container>
  )
}

export default ContactsCreate