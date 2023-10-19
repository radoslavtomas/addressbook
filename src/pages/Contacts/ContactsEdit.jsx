import ContactForm from '../../components/Forms/ContactForm.jsx'
import { Container } from '@chakra-ui/react'

const ContactsEdit = () => {
  return (
    <Container maxW="container.md" py={10}>
      <ContactForm mode="edit"/>
    </Container>
  )
}

export default ContactsEdit