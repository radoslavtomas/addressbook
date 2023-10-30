import ContactForm from '../../components/Forms/ContactForm.jsx'
import { Container } from '@chakra-ui/react'
import { storeContact } from '../../api/contactApi.js'
import { useNavigate } from 'react-router-dom'
import { namedUrls } from '../../routes/routesConfig.js'

const ContactsCreate = () => {
  const navigate = useNavigate()

  const handleContactStore = async (data) => {
    try {
      const response = await storeContact(data)
      console.log(response)

      navigate(namedUrls.getUser, {
        state: {
          redirectTo: namedUrls.contacts
        }
      })
    } catch (err) {
      // TODO: handle error
      console.log(err)
    }
  }

  return (
    <Container maxW="container.md" py={10}>
      <ContactForm mode="create" handleFormSubmit={handleContactStore}/>
    </Container>
  )
}

export default ContactsCreate