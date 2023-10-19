import ContactForm from '../../components/Forms/ContactForm.jsx'
import { Container } from '@chakra-ui/react'

const ContactsCreate = () => {
  return (
    <Container maxW="container.md" py={10}>
      <ContactForm mode="create"/>
    </Container>
  )
}

export default ContactsCreate