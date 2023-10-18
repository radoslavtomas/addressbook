import { Container } from '@chakra-ui/react'
import ContactsList from '../../components/Contacts/ContactsList.jsx'

const Contacts = () => {

  return (
    <Container maxW="container.md" pt={10}>
      <ContactsList/>
    </Container>
  )
}

export default Contacts