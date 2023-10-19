import AddressForm from '../../components/Forms/AddressForm.jsx'
import { Container } from '@chakra-ui/react'

const AddressCreate = () => {
  return (
    <Container maxW="container.md" pt={10}>
      <AddressForm mode="create"/>
    </Container>
  )
}

export default AddressCreate