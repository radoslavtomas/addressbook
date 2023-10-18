import AddressForm from '../../components/Forms/AddressForm.jsx'
import { Container } from '@chakra-ui/react'

const AddAddress = () => {
  return (
    <Container maxW="container.md" pt={10}>
      <AddressForm mode="add"/>
    </Container>
  )
}

export default AddAddress