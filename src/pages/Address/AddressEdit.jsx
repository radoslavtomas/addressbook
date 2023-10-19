import { Container } from '@chakra-ui/react'
import AddressForm from '../../components/Forms/AddressForm.jsx'

const AddressEdit = () => {
  return (
    <Container maxW="container.md" pt={10}>
      <AddressForm mode="edit"/>
    </Container>
  )
}

export default AddressEdit