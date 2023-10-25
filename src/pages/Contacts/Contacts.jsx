import { Container } from '@chakra-ui/react'
import ContactsList from '../../components/Contacts/ContactsList.jsx'
import { useSelector } from 'react-redux'

const Contacts = () => {
  const user = useSelector((state) => state.user.user)
  
  return (
    <Container maxW="container.md" pt={10}>
      {user && user.name}
      <ContactsList/>
    </Container>
  )
}

export default Contacts