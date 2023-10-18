import ContactForm from '../../components/Forms/ContactForm.jsx'
import { Container } from '@chakra-ui/react'

const AddContact = () => {
  return (
    <Container maxW="container.md" py={10}>
      <ContactForm/>
    </Container>
  )
}

export default AddContact